import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://ghost.appditto.com',
  key: 'd387ba2cdeb5e3b04118440282',
  version: 'v3'
})

export async function getPosts(count) {
  return await api.posts
    .browse({
      limit: count,
    })
    .catch(err => {
      console.error(err)
    })
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch(err => {
      console.error(err)
    })
}
