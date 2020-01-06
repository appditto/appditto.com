import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://ghost.appditto.com',
  key: 'd387ba2cdeb5e3b04118440282',
  version: 'v3'
})

export async function getPosts(count) {
  let resultWithoutPolicies = [];
  let result = await api.posts
    .browse({
      limit: count,
    })
    .catch(err => {
      console.error(err)
    });
  result.forEach(item => {
    if (item.feature_image) {
      resultWithoutPolicies.push(item)
    }
  });
  console.log(result)
  return resultWithoutPolicies
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

export async function getNatriumPrivacyPolicy() {
  let result = await api.posts
    .read({
      id: '5e130df66458685aeb1dc659'
    })
    .catch(err => {
      console.error(err)
    });
  console.log(result)
  return result
}

export async function getNatriumEULA() {
  let result = await api.posts
    .read({
      id: '5e131ba76458685aeb1dc6f0'
    })
    .catch(err => {
      console.error(err)
    });
  console.log(result)
  return result
}

export async function getKaliumPrivacyPolicy() {
  let result = await api.posts
    .read({
      id: '5e1321066458685aeb1dc70b'
    })
    .catch(err => {
      console.error(err)
    });
  console.log(result)
  return result
}

export async function getKaliumEULA() {
  let result = await api.posts
    .read({
      id: '5e1321ae6458685aeb1dc71c'
    })
    .catch(err => {
      console.error(err)
    });
  console.log(result)
  return result
}

