const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const GhostContentAPI = require('@tryghost/content-api')
const cheerio = require('cheerio')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

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

  app.get('/api/ghost/posts', async (req, res) => {
    let resultWithoutPolicies = [];
    let imgTagRegex = /<img.*?src="(.*?)"[^\>]+>/g
    let srcRegex = /src="(.*?)"/g
    let urlRegex = /(?<=src=")(.*?)(?=")/g
    let kgImageRegex = /class="kg-image/g
    let cloudinaryUrlW30 = 'https://res.cloudinary.com/appditto/image/fetch/w_30,c_limit,f_auto/'
    let cloudinaryUrlW300 = 'https://res.cloudinary.com/appditto/image/fetch/w_300,c_limit,f_auto/'
    let cloudinaryUrlW600 = 'https://res.cloudinary.com/appditto/image/fetch/w_600,c_limit,f_auto/'
    let cloudinaryUrlW900 = 'https://res.cloudinary.com/appditto/image/fetch/w_900,c_limit,f_auto/'
    let cloudinaryUrlW1200 = 'https://res.cloudinary.com/appditto/image/fetch/w_1200,c_limit,f_auto/'
    let cloudinaryUrlW1500 = 'https://res.cloudinary.com/appditto/image/fetch/w_1500,c_limit,f_auto/'
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
          let imgSrc = imgTag.match(srcRegex)[0];
          let imgUrl = imgSrc.match(urlRegex)[0];
          post.html = post.html.replace(
            imgSrc,
            `datasizes="auto" src="${cloudinaryUrlW30 + imgUrl}" data-srcset="${cloudinaryUrlW300 + imgUrl} 300w, ${cloudinaryUrlW600 + imgUrl} 600w, ${cloudinaryUrlW900 + imgUrl} 900w, ${cloudinaryUrlW1200 + imgUrl} 1200w, ${cloudinaryUrlW1500 + imgUrl} 1500w"`
          )
        })
      }
      post.html = post.html.replace(kgImageRegex, 'class="kg-image lazyload')
    });
    res.json(resultWithoutPolicies)
  })

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
