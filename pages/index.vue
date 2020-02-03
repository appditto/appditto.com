<template>
  <div>
    <HeroSection />
    <div class="container-xl px-5 md:px-16">
      <SingleCodeBaseSection />
      <FastAndEfficientSection />
      <CuttingEdgeTechSection />
    </div>
    <AppsSection />
    <div class="container-xl px-5 md:px-16">
      <BlogSection :posts="posts" />
      <ContactSection />
    </div>
  </div>
</template>
<script>
import 'lazysizes'

export default {
  components: {
    HeroSection: () => import('~/components/sections/HeroSection.vue'),
    SingleCodeBaseSection: () =>
      import('~/components/sections/SingleCodeBaseSection.vue'),
    FastAndEfficientSection: () =>
      import('~/components/sections/FastAndEfficientSection.vue'),
    CuttingEdgeTechSection: () =>
      import('~/components/sections/CuttingEdgeTechSection.vue'),
    AppsSection: () => import('~/components/sections/AppsSection.vue'),
    BlogSection: () => import('~/components/sections/BlogSection.vue'),
    ContactSection: () => import('~/components/sections/ContactSection.vue'),
    BlogCard: () => import('~/components/BlogCard.vue')
  },
  async asyncData({ $axios }) {
    const getPosts = async () => {
      try {
        return await $axios.get('/ghost/last-three-posts')
      } catch (error) {
        console.error(error)
      }
    }
    const posts = (await getPosts()).data
    return { posts: posts }
  },
  data() {
    return {
      homePageDescription:
        "We're building beautiful apps for businesses in record time, using cutting-edge tech.",
      homePageTitle: 'Appditto | Beautiful apps in record time',
      homePagePreview: 'https://appditto.com/images/preview.png',
      homePageThemeColor: '#515EFF'
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'en'
      },
      title: this.homePageTitle,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.homePageDescription
        },
        // Google / Search Engine Tags
        {
          itemprop: 'name',
          content: this.homePageTitle
        },
        {
          itemprop: 'description',
          content: this.homePageDescription
        },
        {
          itemprop: 'image',
          content: this.homePagePreview
        },
        // Facebook Meta Tags
        {
          property: 'og:url',
          content: 'https://appditto.com'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:title',
          content: this.homePageTitle
        },
        {
          property: 'og:description',
          content: this.homePageDescription
        },
        {
          property: 'og:image',
          content: this.homePagePreview
        },
        // Twitter Meta Tags
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: this.homePageTitle
        },
        {
          name: 'twitter:description',
          content: this.homePageDescription
        },
        {
          name: 'twitter:image',
          content: this.homePagePreview
        },
        // Theme
        {
          name: 'theme-color',
          content: this.homePageThemeColor
        },
        // Windows 8 IE 10
        {
          name: 'msapplication-TileColor',
          content: this.homePageThemeColor
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
          content: this.homePageThemeColor
        }
      ],
      link: [
        // Canonical
        {
          rel: 'canonical',
          href: 'https://appditto.com'
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

