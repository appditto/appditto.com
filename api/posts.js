import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://blog.appditto.com',
  key: 'd387ba2cdeb5e3b04118440282',
  version: 'v3'
})

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all'
    })
    .catch(err => {
      console.error(err)
    })
}
