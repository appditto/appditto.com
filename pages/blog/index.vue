<template>
  <div>
    <Navbar id="navbar" :isBlog="true" />
    <b-container fluid class="my-container-big">
      <!-- Small Screens -->
      <div class="d-md-none">
        <b-row class="py-3">
          <b-col cols="12">
            <BlogCard
              v-for="(post, index) in posts"
              :key="index"
              :img="
                post.feature_image.split('images')[0] +
                  'images/size/w600' +
                  post.feature_image.split('images')[1]
              "
              :alt="post.title"
              :title="post.title"
              :url="post.slug"
              :date="post.published_at"
              :readingTime="post.reading_time"
            />
          </b-col>
        </b-row>
      </div>
      <!-- Medium Screens -->
      <div class="d-none d-md-block d-lg-none">
        <b-row class="py-4 px-5">
          <b-col>
            <BlogCard
              v-for="(post, index) in posts.filter((a, i) => i % 2 === 0)"
              :key="index"
              :img="
                post.feature_image.split('images')[0] +
                  'images/size/w600' +
                  post.feature_image.split('images')[1]
              "
              :alt="post.title"
              :title="post.title"
              :url="post.slug"
              :date="post.published_at"
              :readingTime="post.reading_time"
            />
          </b-col>
          <b-col>
            <BlogCard
              v-for="(post, index) in posts.filter((a, i) => i % 2 === 1)"
              :key="index"
              :img="
                post.feature_image.split('images')[0] +
                  'images/size/w600' +
                  post.feature_image.split('images')[1]
              "
              :alt="post.title"
              :title="post.title"
              :url="post.slug"
              :date="post.published_at"
              :readingTime="post.reading_time"
            />
          </b-col>
        </b-row>
      </div>
      <!-- Large Screens -->
      <div class="d-none d-lg-block">
        <b-row class="py-4 px-5">
          <b-col>
            <BlogCard
              v-for="(post, index) in posts.filter((a, i) => i % 3 === 0)"
              :key="index"
              :img="
                post.feature_image.split('images')[0] +
                  'images/size/w600' +
                  post.feature_image.split('images')[1]
              "
              :alt="post.title"
              :title="post.title"
              :url="post.slug"
              :date="post.published_at"
              :readingTime="post.reading_time"
            />
          </b-col>
          <b-col>
            <BlogCard
              v-for="(post, index) in posts.filter((a, i) => i % 3 === 1)"
              :key="index"
              :img="
                post.feature_image.split('images')[0] +
                  'images/size/w600' +
                  post.feature_image.split('images')[1]
              "
              :alt="post.title"
              :title="post.title"
              :url="post.slug"
              :date="post.published_at"
              :readingTime="post.reading_time"
            />
          </b-col>
          <b-col>
            <BlogCard
              v-for="(post, index) in posts.filter((a, i) => i % 3 === 2)"
              :key="index"
              :img="
                post.feature_image.split('images')[0] +
                  'images/size/w600' +
                  post.feature_image.split('images')[1]
              "
              :alt="post.title"
              :title="post.title"
              :url="post.slug"
              :date="post.published_at"
              :readingTime="post.reading_time"
            />
          </b-col>
        </b-row>
      </div>
    </b-container>
    <Footer />
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import BlogCard from '~/components/BlogCard.vue'
import { getPosts } from '~/api/posts'

export default {
  components: {
    Navbar,
    Footer,
    BlogCard
  },
  async asyncData() {
    const posts = await getPosts()
    return { posts: posts }
  },
  methods: {
    navbarOnScroll() {
      // Initial state
      var scrollPos = 0
      const navbar = document.getElementById('navbar')
      const body = document.body
      body.style.paddingTop = '5rem'
      navbar.style.position = 'fixed'
      navbar.style.top = '0'
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
          document.body.getBoundingClientRect().top < scrollPos
        ) {
          navbar.style.marginTop = '-6rem'
        }
        // Saves the new position for iteration.
        scrollPos = document.body.getBoundingClientRect().top
      })
    }
  },
  data() {
    return {
      blogPageDescription:
        "We're building beautiful apps for businesses in record time and writing stories all about apps.",
      blogPageTitle: 'Appditto | Blog',
      blogPagePreview: 'https://appditto.com/images/blog-preview.jpg',
      blogPageThemeColor: '#4082FF'
    }
  },
  head() {
    return {
      title: this.blogPageTitle,
      meta: [
        // Canonical
        {
          rel: 'canonical',
          href: 'https://blog.appditto.com'
        },
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.blogPageDescription
        },
        // Google / Search Engine Tags
        {
          itemprop: 'name',
          content: this.blogPageTitle
        },
        {
          itemprop: 'description',
          content: this.blogPageDescription
        },
        {
          itemprop: 'image',
          content: this.blogPagePreview
        },
        // Facebook Meta Tags
        {
          property: 'og:url',
          content: 'https://blog.appditto.com'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:title',
          content: this.blogPageTitle
        },
        {
          property: 'og:description',
          content: this.blogPageDescription
        },
        {
          property: 'og:image',
          content: this.blogPagePreview
        },
        // Twitter Meta Tags
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: this.blogPageTitle
        },
        {
          name: 'twitter:description',
          content: this.blogPageDescription
        },
        {
          name: 'twitter:image',
          content: this.blogPagePreview
        },
        // Theme
        {
          name: 'theme-color',
          content: this.blogPageThemeColor
        },
        // Windows 8 IE 10
        {
          name: 'msapplication-TileColor',
          content: '#FFFFFF'
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
          content: this.blogPageThemeColor
        }
      ],
      link: [
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