<template>
  <div>
    <div class="container-md mx-auto px-6 pt-6 md:pt-12">
      <main>
        <h1>{{ post.title }}</h1>
        <p
          class="opacity-75 mt-0"
        >{{ formatDate(post.published_at) }} • {{ post.reading_time }} min read</p>
        <div class="content" v-html="post.html"></div>
      </main>
      <Divider />
    </div>
    <div class="container-xl px-6">
      <BlogSection :posts="posts" :isPostPage="true" />
    </div>
  </div>
</template>
<script>
import { getSinglePost } from '~/api/posts'
import { getPosts } from '~/api/posts'
import 'lazysizes'

// Import postscribe only in browser
if (process.client) {
  var postscribe = require('postscribe')
}

export default {
  layout: 'blog',
  components: {
    Divider: () => import('~/components/Divider.vue'),
    BlogSection: () => import('~/components/sections/BlogSection.vue')
  },
  methods: {
    formatDate(date) {
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
      let thisDate = new Date(date)
      let formattedDate =
        thisDate.getDate() +
        ' ' +
        months[thisDate.getMonth()] +
        ', ' +
        thisDate.getFullYear()
      return formattedDate
    }
  },
  mounted() {
    // Load any gists/scripts
    for (var key in this.scriptReplaceMap) {
      postscribe(`#gist_${key}`, this.scriptReplaceMap[key])
    }
  },
  async asyncData({ params }) {
    let post = await getSinglePost(params.slug)
    const posts = await getPosts('4')
    let postThree = []
    posts.forEach(singlePost => {
      if (singlePost.slug != params.slug) {
        postThree.push(singlePost)
      }
    })
    // Find all script tags
    let scriptRegex = /<script(.*?)<\/script>/g
    let result
    let ret = {}
    let i = 0
    let reg_cloudinary = new RegExp(
      '<img src="https://ghost.appditto.com/content/',
      'g'
    )
    let reg_kgimage = new RegExp('class="kg-image', 'g')
    let placeholderPath = require('~/assets/images/placeholder.svg')
    // Replace scripts with a placeholder, we'll defer loading until later
    if (post.html.match(scriptRegex)) {
      post.html.match(scriptRegex).forEach(element => {
        post.html = post.html.replace(
          element,
          `<div id="gist_${i}">&nbsp</div>`
        )
        ret[i] = element
        i++
      })
    }
    post.html = post.html.replace(
      reg_cloudinary,
      '<img src="' +
        placeholderPath +
        '" data-src="https://res.cloudinary.com/appditto/image/fetch/q_70,f_auto/https://ghost.appditto.com/content/'
    )
    post.html = post.html.replace(reg_kgimage, 'class="kg-image lazyload')
    return { post: post, posts: postThree, scriptReplaceMap: ret }
  },
  data() {
    return {
      postPageThemeColor: '#515EFF'
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'en'
      },
      title: this.post.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.post.excerpt
        },
        // Google / Search Engine Tags
        {
          itemprop: 'name',
          content: this.post.title
        },
        {
          itemprop: 'description',
          content: this.post.excerpt
        },
        {
          itemprop: 'image',
          content: this.post.feature_image
        },
        // Facebook Meta Tags
        {
          property: 'og:url',
          content: this.post.url.replace(
            'ghost.appditto.com',
            'appditto.com/blog'
          )
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:title',
          content: this.post.title
        },
        {
          property: 'og:description',
          content: this.post.excerpt
        },
        {
          property: 'og:image',
          content: this.post.feature_image
        },
        // Twitter Meta Tags
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: this.post.title
        },
        {
          name: 'twitter:description',
          content: this.post.excerpt
        },
        {
          name: 'twitter:image',
          content: this.post.feature_image
        },
        // Theme
        {
          name: 'theme-color',
          content: this.postPageThemeColor
        },
        // Windows 8 IE 10
        {
          name: 'msapplication-TileColor',
          content: this.postPageThemeColor
        },
        {
          name: 'msapplication-TileImage',
          content: '/favicons/favicon-144.png'
        },
        // Windows 8.1 + IE11 and above
        {
          name: 'msapplication-config',
          content: '/favicons/browserconfig.xml'
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: this.postPageThemeColor
        }
      ],
      link: [
        // Canonical
        {
          rel: 'canonical',
          href: 'https://appditto.com/blog/' + this.post.slug
        },
        // Generic Icons
        { rel: 'icon', sizes: '32x32', href: '/favicons/favicon-32.png' },
        { rel: 'icon', sizes: '57x57', href: '/favicons/favicon-57.png' },
        { rel: 'icon', sizes: '76x76', href: '/favicons/favicon-76.png' },
        { rel: 'icon', sizes: '96x94', href: '/favicons/favicon-96.png' },
        { rel: 'icon', sizes: '128x128', href: '/favicons/favicon-128.png' },
        { rel: 'icon', sizes: '192x192', href: '/favicons/favicon-192.png' },
        { rel: 'icon', sizes: '228x228', href: '/favicons/favicon-228.png' },
        // Android
        {
          rel: 'shortcut icon',
          sizes: '196x196',
          href: '/favicons/favicon-196.png'
        },
        // iOS
        {
          rel: 'apple-touch-icon',
          sizes: '120x120',
          href: '/favicons/favicon-120.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '152x152',
          href: '/favicons/favicon-152.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '167x167',
          href: '/favicons/favicon-167.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicons/favicon-180.png'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
$primary: #515eff;
$dark: #383c44;
// Ghost styles
@mixin font-size-p() {
  font-size: 1.1rem;
  @media only screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
}

@mixin font-line-height-p() {
  line-height: 1.9rem;
  @media only screen and (min-width: 768px) {
    line-height: 2.1rem;
  }
}

@mixin font-size-code() {
  font-size: 0.9rem;
  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }
}

@mixin font-h2() {
  font-size: 1.5rem;
  line-height: 2rem;
  @media only screen and (min-width: 768px) {
    font-size: 1.75rem;
    line-height: 2.3rem;
  }
}

@mixin font-h1() {
  font-size: 1.9rem;
  line-height: 2.7rem;

  @media only screen and (min-width: 768px) {
    font-size: 2.25rem !important;
    line-height: 3.1rem;
  }
}

$font-family-p: 'Lora', serif;
$header-height: 5rem;

.content > p > code,
.content > ul > li > code,
.content > ol > li > code,
.content > pre {
  color: $dark;
  background-color: rgba($dark, 0.1);
  padding: 0.15rem 0.3rem;
  margin: 0 0.25rem;
  border-radius: 0.15rem;
  border: solid 1px rgba($dark, 0.1);
}

.content > pre {
  overflow: scroll;
}
.kg-image {
  max-width: 100% !important;
  max-height: 100% !important;
  width: auto !important;
  height: auto !important;
  margin-top: 2rem !important;
  margin-left: auto !important;
  margin-right: auto !important;
}

.kg-image-card {
  text-align: center !important;
  margin-left: -1.5rem !important;
  margin-right: -1.5rem !important;
  @media only screen and (min-width: 768px) {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }
}

.content > .embedly-card {
  margin-top: 2rem;
}

main > h1 {
  font-weight: 700;
  font-family: 'Butler', 'sans-serif';
  @include font-h1;
}

.content > h2 {
  margin-top: 4rem;
  margin-bottom: -0.75rem;
  font-weight: 700;
  @include font-h2;
}

.content > h3 {
  margin-top: 4rem;
  margin-bottom: -0.75rem;
  font-weight: 600;
  @include font-h2;
}

strong {
  font-weight: 700 !important;
}

.content > p {
  @include font-size-p;
  @include font-line-height-p;
  font-family: $font-family-p;
  font-weight: 400;
  margin-top: 1.5rem;
  margin-bottom: 0rem;
  word-break: break-word;
}

.content > ul,
.content > ol {
  @include font-size-p;
  @include font-line-height-p;
  font-family: $font-family-p !important;
  font-weight: 400 !important;
  margin-top: 1.5rem;
  padding-left: 2.25rem;
}

.content > ul {
  list-style-type: disc;
}
.content > ol {
  list-style-type: decimal;
}

.content > ul > li,
.content > ol > li,
.content > ul > li > strong,
.content > ul > ol > strong {
  margin-top: 0.75rem;
  font-family: $font-family-p !important;
}

.content > p > code,
.content > ul > li > code,
.content > ol > li > code {
  color: rgba($dark, 1) !important;
  background-color: rgba($dark, 0.05);
  padding: 0.15rem 0.45rem;
  @include font-size-code;
  border-radius: 0.25rem;
  border: solid 1px rgba($dark, 0.1);
  @include font-line-height-p;
  margin-left: 0.15rem;
  margin-right: 0.15rem;
}

.content > pre {
  color: rgba($dark, 1) !important;
  background-color: rgba($dark, 0.05);
  padding: 0.75rem 1.25rem;
  @include font-size-code;
  border-radius: 0.25rem;
  border: solid 1px rgba($dark, 0.1);
  @include font-line-height-p;
  margin-top: 1.5rem;
  margin-left: 0rem;
  margin-right: 0rem;
}

code {
  font-family: 'FiraMono', monospace !important;
}

.content > p > a,
.content > ul > li > a,
.content > ol > li > a,
.content > p > code > a {
  font-weight: 700 !important;
  text-decoration: underline !important;
  color: rgba($dark, 1) !important;
}

.content > p > a:hover,
.content > ul > li > a:hover,
.content > ol > li > a:hover,
.content > code > a:hover,
.content > p > code > a:hover {
  color: rgba($primary, 1) !important;
}

.kg-bookmark-card {
  width: 100% !important;
  position: relative !important;
  margin-top: 2rem !important;
}

.kg-bookmark-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  color: currentColor;
  font-family: inherit;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.25s ease;
  transform: scale(1);
  box-shadow: 0 0.25rem 0.5rem 0 rgba($dark, 0.08);
}

.kg-bookmark-container:hover {
  text-decoration: none;
  transform: scale(1.035);
  box-shadow: 0 0.75rem 1.5rem 0 rgba($dark, 0.04);
}

a.kg-bookmark-container {
  text-decoration: none !important;
  color: $dark !important;
}

.kg-bookmark-content {
  flex-basis: 0;
  flex-grow: 999;
  padding: 1.25rem 1.5rem;
  order: 1;
  max-width: 100%;
}

.kg-bookmark-thumbnail {
  display: flex;
  flex-basis: 24rem;
  flex-grow: 1;
  max-height: 15rem;
  max-width: 100%;
}

@media only screen and (min-width: 576px) {
  .kg-bookmark-thumbnail {
    flex-basis: 12rem;
    max-height: 12rem;
  }
  .kg-bookmark-thumbnail img {
    margin-left: auto;
    margin-right: 0rem !important;
  }
}

.kg-bookmark-thumbnail img {
  object-fit: cover;
  max-height: 100%;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.kg-bookmark-title {
  font-weight: 700;
}

.kg-bookmark-metadata,
.kg-bookmark-description {
  margin-top: 0.5em;
}

.kg-bookmark-metadata {
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba($dark, 0.6);
}

.kg-bookmark-description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.kg-bookmark-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: text-bottom;
  margin-right: 0.5em;
  margin-bottom: 0.05em;
}

.kg-bookmark-author {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.gist {
  margin-bottom: 2rem;
}
.content > figure > figcaption {
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.75;
  margin-top: 0.75rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}
.content > figure {
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>