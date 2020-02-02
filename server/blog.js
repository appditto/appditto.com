"use strict"

const fs = require('fs');
const GhostContentAPI = require('@tryghost/content-api')

// Get the posts from ghost and parse the HTML
const updateBlogData = async () => {
    // Create API instance with site credentials
    const api = new GhostContentAPI({
        url: 'https://ghost.appditto.com',
        key: 'd387ba2cdeb5e3b04118440282',
        version: 'v3'
    })
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
    api.posts
        .browse({
            limit: 'all',
        })
        .then(posts => {
            posts.forEach(post => {
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
            });
            return posts
        }).then(posts => {
            let blogPostsWithoutPolicies = [];
            posts.forEach(post => {
                let postData = JSON.stringify(post)
                fs.writeFile('./blog/posts/' + post.slug + '.json', postData, (err) => {
                    if (err) throw err;
                    console.log(`Updated: ${post.slug}, At: ${Date()}, Timestamp: ${Date.now()}`);
                });
                if (post.feature_image) {
                    blogPostsWithoutPolicies.push(post)
                }
            })
            return blogPostsWithoutPolicies
        }).then(blogPostsWithoutPolicies => {
            let blogDataWithoutPolicies = JSON.stringify(blogPostsWithoutPolicies)
            fs.writeFile('./blog/blog.json', blogDataWithoutPolicies, (err) => {
                if (err) throw err;
                console.log(`Updated: blog.json, At: ${Date()}, Timestamp: ${Date.now()}`);
            });
        })
        .catch(err => {
            console.error(err)
        })
    return
}

exports.updateBlogData = updateBlogData