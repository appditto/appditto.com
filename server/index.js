const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const fs = require('fs');
const blog = require('./blog.js');

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'
config.unix_socket = process.env.UNIX_SOCKET === 'true'


async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Update local blog files based on Ghost API
  blog.updateBlogData()

  app.get('/api/ghost/posts', async (req, res) => {
    fs.access('./blog/blog.json', fs.F_OK, (err) => {
      if (err) {
        console.log(err)
        res.sendStatus(404)
      } else {
        res.sendFile('./blog/blog.json', { root: './' });
      }
    })
  })

  app.get('/api/ghost/posts/:slug', async (req, res) => {
    fs.access('./blog/posts/' + req.params.slug + '.json', fs.F_OK, (err) => {
      if (err) {
        console.log(err)
        res.sendStatus(404)
      } else {
        res.sendFile('./blog/posts/' + req.params.slug + '.json', { root: './' });
      }
    })
  })

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  if (config.unix_socket) {
    app.listen('/tmp/appditto.sock')
  } else {
    app.listen(port, host)
  }
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
