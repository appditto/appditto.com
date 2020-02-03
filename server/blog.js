"use strict"

const fs = require('fs');
const GhostContentAPI = require('@tryghost/content-api')
var crypto = require('crypto');


const updateBlogDataOrNot = async () => {
    fs.readFile('./blog/last-update.json', (err, data) => {
        if (err) {
            console.log(err)
            res.sendStatus(404)
        }
        let oldTimestamp = JSON.parse(data)[0].timestamp
        let newTimestamp = Date.now()
        if (newTimestamp - oldTimestamp < 5000) {
            // Don't update if it's too soon
            console.log("Too soon to update")
        } else {
            updateBlogDataBasedOnHashOrNot()
        }
    })
}
const updateBlogDataBasedOnHashOrNot = async () => {
    // Create API instance with site credentials
    const api = new GhostContentAPI({
        url: 'https://ghost.appditto.com',
        key: 'd387ba2cdeb5e3b04118440282',
        version: 'v3'
    })
    api.posts
        .browse({
            limit: 'all',
        }).catch(err => {
            console.error(err)
        }).then(posts => {
            fs.readFile('./blog/last-update.json', (err, data) => {
                if (err) {
                    console.log(err)
                    res.sendStatus(404)
                }
                let oldHash = JSON.parse(data)[0].hash
                let newHash = crypto.createHash('md5').update(JSON.stringify(posts)).digest('hex');
                if (oldHash == newHash) {
                    // Don't update if it's the same
                    console.log("Blog content is the same, no need to update")
                } else {
                    console.log('Old hash is: ' + oldHash)
                    console.log('New hash is: ' + newHash)
                    updateBlogData(posts, newHash)
                }
            })
        })
}

// Get the posts from ghost and parse the HTML
const updateBlogData = async (rawPosts, rawBlogHash) => {
    const imgTagRegex = /<img.*?src="(.*?)"[^\>]+>/g
    const srcRegex = /src="(.*?)"/g
    const urlRegex = /(?<=src=")(.*?)(?=")/g
    const kgImageRegex = /class="kg-image/g
    const classRegex = /class="(.*?)"/g
    const cloudinaryUrl100w = 'https://res.cloudinary.com/appditto/image/fetch/w_100,c_limit,q_1,f_auto,pg_1/'
    const cloudinaryUrl300w = 'https://res.cloudinary.com/appditto/image/fetch/w_300,c_limit,q_80,f_auto/'
    const cloudinaryUrl600w = 'https://res.cloudinary.com/appditto/image/fetch/w_600,c_limit,q_80,f_auto/'
    const cloudinaryUrl900w = 'https://res.cloudinary.com/appditto/image/fetch/w_900,c_limit,q_80,f_auto/'
    const cloudinaryUrl1200w = 'https://res.cloudinary.com/appditto/image/fetch/w_1200,c_limit,q_80,f_auto/'
    const cloudinaryUrl1500w = 'https://res.cloudinary.com/appditto/image/fetch/w_1500,c_limit,q_80,f_auto/'
    const cloudinaryUrl2000w = 'https://res.cloudinary.com/appditto/image/fetch/w_2000,c_limit,q_80,f_auto/'
    const editRawPostsAndReturnEdited = async (rawBlogHash) => {
        rawPosts.forEach(post => {
            // Edit the html of each single post unless they are policies
            if (post.feature_image !== undefined && post.html.match(imgTagRegex)) {
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
            // Add lazyloading to items with kg-image class
            if (post.feature_image !== undefined) { post.html = post.html.replace(kgImageRegex, 'class="kg-image lazyload') }
        })
        return { posts: rawPosts, rawBlogHash: rawBlogHash }
    }
    editRawPostsAndReturnEdited(rawBlogHash).then(data => {
        let blogPostsWithoutPolicies = [];
        data.posts.forEach(post => {
            let postData = JSON.stringify(post)
            // Update each blog post JSON
            fs.writeFile('./blog/posts/' + post.slug + '.json', postData, (err) => {
                if (err) throw err;
                console.log(`Updated: ${post.slug}, At: ${Date()}, Timestamp: ${Date.now()}`);
            });
            if (post.feature_image) {
                blogPostsWithoutPolicies.push(post)
            }
        })
        return { blogPostsWithoutPolicies: blogPostsWithoutPolicies, rawBlogHash: rawBlogHash }
    }).then(data => {
        let blogDataWithoutPolicies = JSON.stringify(data.blogPostsWithoutPolicies)
        // Update the blog.json file
        fs.writeFile('./blog/blog.json', blogDataWithoutPolicies, (err) => {
            if (err) throw err;
            console.log(`Updated: blog.json, At: ${Date()}, Timestamp: ${Date.now()}`);
        });
        let sliceToThreeAndRemoveHtml = data => {
            let editedData = data.slice(0, 3)
            editedData.forEach(item => {
                item.html = ''
            })
            return editedData
        }
        let lastThreePostsDataWithoutPolicies = JSON.stringify(sliceToThreeAndRemoveHtml(data.blogPostsWithoutPolicies))
        // Update the last-three-posts.json file
        fs.writeFile('./blog/last-three-posts.json', lastThreePostsDataWithoutPolicies, (err) => {
            if (err) throw err;
            console.log(`Updated: last-three-posts.json, At: ${Date()}, Timestamp: ${Date.now()}`);
        });
        return data.rawBlogHash
    }).then((rawBlogHash) => {
        fs.writeFile('./blog/last-update.json', JSON.stringify([{ timestamp: Date.now(), hash: rawBlogHash }]), (err) => {
            if (err) throw err;
            console.log(`Updated: last-update.json, At: ${Date()}, Timestamp: ${Date.now()}`);
        });
    }).catch(err => {
        console.error(err)
    })
}

exports.updateBlogDataOrNot = updateBlogDataOrNot