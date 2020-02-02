const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const GhostContentAPI = require('@tryghost/content-api')
var mcache = require('memory-cache');

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'
config.unix_socket = process.env.UNIX_SOCKET === 'true'

// For memory cache
var cache = (duration) => {
  return (req, res, next) => {
    let key = '__express__' + req.originalUrl || req.url
    let cachedBody = mcache.get(key)
    if (cachedBody) {
      res.send(cachedBody)
      return
    } else {
      res.sendResponse = res.send
      res.send = (body) => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body)
      }
      next()
    }
  }
}


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

  // Get the posts from ghost and parse the HTML

  // Create API instance with site credentials
  const api = new GhostContentAPI({
    url: 'https://ghost.appditto.com',
    key: 'd387ba2cdeb5e3b04118440282',
    version: 'v3'
  })

  let imgTagRegex = /<img.*?src="(.*?)"[^\>]+>/g
  let srcRegex = /src="(.*?)"/g
  let urlRegex = /(?<=src=")(.*?)(?=")/g
  let kgImageRegex = /class="kg-image/g
  let classRegex = /class="(.*?)"/g
  let cloudinaryUrl100w = 'https://res.cloudinary.com/appditto/image/fetch/w_100,c_limit,q_1,f_auto,pg_1/'
  let cloudinaryUrl300w = 'https://res.cloudinary.com/appditto/image/fetch/w_300,c_limit,q_80,f_auto/'
  let cloudinaryUrl600w = 'https://res.cloudinary.com/appditto/image/fetch/w_600,c_limit,q_80,f_auto/'
  let cloudinaryUrl900w = 'https://res.cloudinary.com/appditto/image/fetch/w_900,c_limit,q_80,f_auto/'
  let cloudinaryUrl1200w = 'https://res.cloudinary.com/appditto/image/fetch/w_1200,c_limit,q_80,f_auto/'
  let cloudinaryUrl1500w = 'https://res.cloudinary.com/appditto/image/fetch/w_1500,c_limit,q_80,f_auto/'
  let cloudinaryUrl2000w = 'https://res.cloudinary.com/appditto/image/fetch/w_2000,c_limit,q_80,f_auto/'

  app.get('/api/ghost/posts', cache(60), async (req, res) => {
    let resultWithoutPolicies = [];
    let result = await api.posts
      .browse({
        limit: 'all',
      })
      .catch(err => {
        console.error(err)
      });
    result.forEach(item => {
      if (item.feature_image) {
        resultWithoutPolicies.push(item)
      }
    });
    // For each post
    resultWithoutPolicies.forEach(post => {
      if (post.html.match(imgTagRegex)) {
        // For each img tag in a post
        post.html.match(imgTagRegex).forEach(imgTag => {
          // Match the image src attribute, including the src=
          let imgSrc = imgTag.match(srcRegex)[0];
          // Match the url of the src attribute
          let imgUrl = imgSrc.match(urlRegex)[0];
          // Replace the image src attribute with datasizes, src, srcset and data-srcset
          if (imgTag.match(kgImageRegex)) {
            post.html = post.html.replace(imgTag, '<div class="image-wrapper">' + imgTag + '</div>')
            post.html = post.html.replace(
              imgSrc,
              `datasizes="auto" src="${cloudinaryUrl1200w + imgUrl}" srcset="${cloudinaryUrl100w + imgUrl}" data-srcset="${cloudinaryUrl300w + imgUrl} 300w, ${cloudinaryUrl600w + imgUrl} 600w, ${cloudinaryUrl900w + imgUrl} 900w, ${cloudinaryUrl1200w + imgUrl} 1200w, ${cloudinaryUrl1500w + imgUrl} 1500w, ${cloudinaryUrl2000w + imgUrl} 2000w"`
            )
          }
        })
      }
      post.html = post.html.replace(kgImageRegex, 'class="kg-image lazyload')
    });
    res.json(resultWithoutPolicies)
  })

  app.get('/api/ghost/posts/:slug', cache(60), async (req, res) => {
    let post = await api.posts
      .read({
        slug: req.params.slug,
      })
      .catch(err => {
        console.error(err)
      })
    if (post !== undefined) {
      // For each img tag in a post
      post.html.match(imgTagRegex).forEach(imgTag => {
        // Match the image src attribute, including the src=
        let imgSrc = imgTag.match(srcRegex)[0];
        // Match the url of the src attribute
        let imgUrl = imgSrc.match(urlRegex)[0];
        // Replace the image src attribute with datasizes, src, srcset and data-srcset
        if (imgTag.match(kgImageRegex)) {
          post.html = post.html.replace(imgTag, '<div class="image-wrapper">' + imgTag + '</div>')
          post.html = post.html.replace(
            imgSrc,
            `datasizes="auto" src="${cloudinaryUrl1200w + imgUrl}" srcset="${cloudinaryUrl100w + imgUrl}" data-srcset="${cloudinaryUrl300w + imgUrl} 300w, ${cloudinaryUrl600w + imgUrl} 600w, ${cloudinaryUrl900w + imgUrl} 900w, ${cloudinaryUrl1200w + imgUrl} 1200w, ${cloudinaryUrl1500w + imgUrl} 1500w, ${cloudinaryUrl2000w + imgUrl} 2000w"`
          )
        }
      });
      post.html = post.html.replace(kgImageRegex, 'class="kg-image lazyload')
      res.json(post)
    } else {
      res.sendStatus(404)
    }
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
