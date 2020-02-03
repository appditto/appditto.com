<template>
  <div class="w-full">
    <div class="container-md px-6 py-12 md:py-20">
      <h1
        class="text-3xl md:text-4xl leading-tight text-center font-bold"
      >{{blaisePrivacyPolicy.title}}</h1>
      <div class="content" v-html="blaisePrivacyPolicy.html"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  layout: 'policy',
  components: {},
  async asyncData() {
    const getSinglePost = async () => {
      try {
        return await axios.get(
          '/api/ghost/posts/blaise-mobile-application-privacy-policy'
        )
      } catch (e) {
        console.error(e)
      }
    }
    const rawPost = await getSinglePost()
    const blaisePrivacyPolicy = rawPost.data
    return { blaisePrivacyPolicy: blaisePrivacyPolicy }
  },
  data() {
    return {
      homePageDescription:
        'We respect your privacy and understand that it is very important. Check out our privacy policy to understand how we handle it.',
      homePageTitle: 'Appditto | Blaise Privacy Policy',
      homePagePreview: 'https://appditto.com/images/privacypolicy-preview.png',
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
          href: 'https://appditto.com/apps/blaise/privacypolicy'
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