<template>
  <div class="pt-5rem">
    <Navbar id="navbarPostPage" :isBlog="true" />
    <b-container fluid class="my-container-medium pt-4 pt-md-5">
      <main>
        <h1>{{ post.title }}</h1>
        <p class="op-50 mt-2">
          {{ formatDate(post.published_at) }} • {{ post.reading_time }} min read
        </p>
        <div class="content">
          <div v-lazy-load="post.html"></div>
        </div>
      </main>
      <Divider />
    </b-container>
    <b-container fluid class="my-container-big">
      <BlogSection :posts="posts" :isPostPage="true" />
    </b-container>
    <Footer />
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import Divider from '~/components/Divider.vue'
import BlogSection from '~/components/sections/BlogSection.vue'
import { getSinglePost } from '~/api/posts'
import { getPosts } from '~/api/posts'

export default {
  components: {
    Navbar,
    Footer,
    Divider,
    BlogSection
  },
  mounted() {
    // Initial state
    var scrollPos = 0
    const navbar = document.getElementById('navbarPostPage')
    // Adding scroll event
    window.addEventListener('scroll', function() {
      // Detects new state and compares it with the new one
      if (
        window.pageYOffset < 50 ||
        document.body.getBoundingClientRect().top > scrollPos + 10
      ) {
        navbar.style.marginTop = '0rem'
      } else if (
        window.pageYOffset >= 100 &&
        document.body.getBoundingClientRect().top < scrollPos - 10
      ) {
        navbar.style.marginTop = '-6rem'
      }
      // Saves the new position for iteration.
      scrollPos = document.body.getBoundingClientRect().top

      // navbar shadow
      if (
        window.pageYOffset >= 50 &&
        !navbar.classList.contains('navbar-shadow')
      ) {
        navbar.classList.add('navbar-shadow')
      } else if (
        window.pageYOffset < 50 &&
        navbar.classList.contains('navbar-shadow')
      ) {
        navbar.classList.remove('navbar-shadow')
      }
    })
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
  async asyncData({ params }) {
    const post = await getSinglePost(params.slug)
    const posts = await getPosts('4')
    let postThree = []
    console.log(posts)
    posts.forEach(singlePost => {
      if (singlePost.slug != params.slug) {
        postThree.push(singlePost)
      }
    })
    return { post: post, posts: postThree }
  },
  data() {
    return {
      postPageThemeColor: '#FFFFFF'
    }
  },
  head() {
    return {
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
          content: this.post.url
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
          href: 'https://appditto.com/blog' + this.post.slug
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