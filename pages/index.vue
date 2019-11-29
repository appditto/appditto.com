<template>
  <div>
    <Navbar />
    <b-container fluid class="my-container-big">
      <HeroSection />
      <SingleCodeBaseSection />
      <FastAndEfficientSection />
      <CuttingEdgeTechSection />
    </b-container>
    <AppsSection />
    <b-container fluid class="my-container-big">
      <BlogSection :posts="posts" />
      <ContactSection />
    </b-container>
    <Footer />
  </div>
</template>
<script>
import HeroSection from '~/components/sections/HeroSection.vue'
import SingleCodeBaseSection from '~/components/sections/SingleCodeBaseSection.vue'
import FastAndEfficientSection from '~/components/sections/FastAndEfficientSection.vue'
import CuttingEdgeTechSection from '~/components/sections/CuttingEdgeTechSection.vue'
import AppsSection from '~/components/sections/AppsSection.vue'
import BlogSection from '~/components/sections/BlogSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
import Navbar from '~/components/Navbar.vue'
import BlogCard from '~/components/BlogCard.vue'
import Footer from '~/components/Footer.vue'
import MyForm from '~/components/MyForm.vue'
import { getPosts } from '~/api/posts'

export default {
  components: {
    HeroSection,
    SingleCodeBaseSection,
    FastAndEfficientSection,
    CuttingEdgeTechSection,
    AppsSection,
    BlogSection,
    ContactSection,
    Navbar,
    BlogCard,
    MyForm,
    Footer
  },
  async asyncData() {
    const posts = await getPosts()
    return { posts: posts }
  },
  data() {
    return {
      homePageDescription:
        "We're building beautiful apps for businesses in record time, using cutting-edge tech.",
      homePageTitle: 'Appditto | Beautiful apps in record time',
      homePagePreview: 'https://appditto.com/images/preview.jpg',
      homePageThemeColor: '#4082FF'
    }
  },
  head() {
    return {
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
          content: this.homePageThemeColor
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

