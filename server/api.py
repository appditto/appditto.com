#!/usr/bin/env python
from dotenv import load_dotenv
load_dotenv()

from aiohttp import ClientSession, log, web
from email.mime.text import MIMEText
from logging.handlers import TimedRotatingFileHandler, WatchedFileHandler
import aiohttp_cors
import aioredis
import aiosmtplib
import argparse
import asyncio
import ipaddress
import logging
import re
import os
import uvloop

uvloop.install()

### Config

parser = argparse.ArgumentParser(description="appditto.com server")
parser.add_argument('--host', type=str, help='Host for betsy to listen on', default='127.0.0.1')
parser.add_argument('--port', type=int, help='Port for betsy to listen on', default='3001')
parser.add_argument('--log-file', type=str, help='Log file location', default='/tmp/apdditocom_api.log')
parser.add_argument('--recipient', type=str, help='Email to send to', default='hello@appditto.com')
parser.add_argument('--sender', type=str, help='Email sender', default='noreply@mail.appditto.com')
parser.add_argument('--mail-server', type=str, help='Mail server', default='smtp.gmail.com')
parser.add_argument('--debug', action='store_true', help='Runs in debug mode if specified', default=False)
options = parser.parse_args()

### Parse options

LOG_FILE = options.log_file
LISTEN_HOST = str(ipaddress.ip_address(options.host))
LISTEN_PORT = int(options.port)
DEBUG = options.debug
EMAIL_RECIPIENT = options.recipient
EMAIL_SENDER = options.sender
MAIL_SERVER = options.mail_server
MAIL_USERNAME = os.getenv('MAIL_USER', 'user')
MAIL_PASSWORD = os.getenv('MAIL_PASSWORD', '1234')

### Utils

def valid_email(email : str) -> bool:
    regex = '^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
    if(re.search(regex, email)):  
        return True
    return False

async def send_email(message : MIMEText):
    smtp_client = aiosmtplib.SMTP(hostname=MAIL_SERVER, port=587, use_tls=False)
    await smtp_client.connect()
    await smtp_client.starttls()
    await smtp_client.login(MAIL_USERNAME, MAIL_PASSWORD)
    await smtp_client.send_message(message)
    await smtp_client.quit()

def get_real_request_ip(request : web.Request) -> str:
    host = request.headers.get('X-FORWARDED-FOR',None)
    if host is None:
        peername = request.transport.get_extra_info('peername')
        if peername is not None:
            host, _ = peername
    return host

### APIs

async def email_handler(request : web.Request):
    requestjson = await request.json()
    if 'sender' not in requestjson:
        return web.HTTPBadRequest(reason='sender is required')
    elif 'sender_name' not in requestjson:
        return web.HTTPBadRequest(reason='name is required')
    elif len(requestjson['sender_name'].strip()) == 0:
        return web.HTTPBadRequest(reason='name is required')
    elif 'content' not in requestjson:
        return web.HTTPBadRequest(reason='content is required')
    elif len(requestjson['content']) < 50:
        return web.HTTPBadRequest(reason='content too short')
    elif not valid_email(requestjson['sender']):
        return web.HTTPBadRequest(reason='invalid email')

    # Check IP
    real_ip = get_real_request_ip(request)
    has_prev_request = await request.app['redis'].get(f"adcomemail{real_ip.replace('.', '')}")
    if has_prev_request is not None:
        return web.HTTPBadRequest(reason='Already submitted request')
    # Set a key to prevent duplicate request
    await request.app['redis'].set(f"adcomemail{real_ip.replace('.', '')}", "appditto", expire=60)

    message = MIMEText(requestjson['content'])
    message['From'] = EMAIL_SENDER
    message['To'] = EMAIL_RECIPIENT
    message['Subject'] = f"[appditto.com] Inquiry from {requestjson['sender_name']}"
    message.add_header('Reply-To', requestjson['sender'])

    asyncio.ensure_future(send_email(message))
    return web.Response(status=200)

### APP setup

async def get_app():
    async def close_redis(app : web.Application):
        """Close redis connection"""
        log.server_logger.info('Closing redis connection')
        try:
            app['redis'].close()
        except Exception:
            pass

    async def open_redis(app : web.Application):
        """Open redis connection"""
        log.server_logger.info("Opening redis connection")
        try:
            app['redis'] = await aioredis.create_redis_pool(('localhost', 6379),
                                                db=1, encoding='utf-8', minsize=2, maxsize=15)
        except Exception:
            app['redis'] = None
            log.server_logger.warn('WARNING: Could not connect to Redis, work caching and some other features will not work')

    if DEBUG:
        logging.basicConfig(level=logging.DEBUG)
    else:
        root = logging.getLogger('aiohttp.server')
        logging.basicConfig(level=logging.INFO)
        handler = WatchedFileHandler(LOG_FILE)
        formatter = logging.Formatter("%(asctime)s;%(levelname)s;%(message)s", "%Y-%m-%d %H:%M:%S %z")
        handler.setFormatter(formatter)
        root.addHandler(handler)
        root.addHandler(TimedRotatingFileHandler(LOG_FILE, when="d", interval=1, backupCount=100))  
    app = web.Application()
    cors = aiohttp_cors.setup(app, defaults={
        "*": aiohttp_cors.ResourceOptions(
                allow_credentials=True,
                expose_headers="*",
                allow_headers="*",
            )
    })
    resource = cors.add(app.router.add_resource("/inquire"))
    cors.add(resource.add_route("POST", email_handler))
    app.on_startup.append(open_redis)
    app.on_shutdown.append(close_redis)

    return app

work_app = asyncio.get_event_loop().run_until_complete(get_app())

def main():
    """Main application loop"""

    # Start web/ws server
    async def start():
        runner = web.AppRunner(work_app)
        await runner.setup()
        site = web.TCPSite(runner, LISTEN_HOST, LISTEN_PORT)
        await site.start()

    async def end():
        await work_app.shutdown()

    asyncio.get_event_loop().run_until_complete(start())

    # Main program
    try:
        asyncio.get_event_loop().run_forever()
    except KeyboardInterrupt:
        pass
    finally:
        asyncio.get_event_loop().run_until_complete(end())

    asyncio.get_event_loop().close()

if __name__ == "__main__":
    main()