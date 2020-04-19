FROM python:3.7

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --trusted-host pypi.org --no-cache-dir -r requirements.txt

COPY . .

CMD [ "python", "./api.py", "--host", "0.0.0.0", "--port", "3001",  "--sender", "appdittoapps@gmail.com"]