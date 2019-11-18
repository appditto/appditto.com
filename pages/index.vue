<template>
  <div>
    <b-container fluid class="my-container px-4">
      <!-- Navbar -->
      <Navbar />
      <!-- Hero -->
      <section class="py-4 py-md-0">
        <b-row align-v="center" align-h="center">
          <b-col cols="12" md="6">
            <h1 class="text-center text-md-left w800 mt-3">
              We build <span class="text-primary">beautiful apps</span>,<br
                class="d-none d-xl-block"
              />
              in <span class="text-primary">record time</span>.
            </h1>
            <b-row class="px-3 justify-content-center justify-content-md-start">
              <b-btn
                href="mailto:hello@appditto.com"
                variant="primary"
                size="lg"
                rounded
                class="w800 px-5 mt-2 grow-2 btn-shdw-primary"
                >Let's Talk</b-btn
              >
            </b-row>
          </b-col>
          <b-col cols="12" md="5" class="mt-4 mt-md-0">
            <img
              src="~/assets/images/hero-phones.png"
              alt="Hero"
              class="w-100"
            />
          </b-col>
        </b-row>
      </section>
      <!-- Single codebase -->
      <section class="py-4 py-md-5">
        <b-row align-v="center" align-h="around">
          <b-col cols="11" md="4" class="mt-4 mt-md-0">
            <img
              src="~/assets/images/single-codebase.svg"
              alt="Single codebase"
              class="w-100"
            />
          </b-col>
          <b-col cols="12" md="7" class="px-md-5">
            <div class="pl-md-5">
              <h2 class="text-center text-md-left w800 mt-2 mt-md-0">
                Less maintenance,<br />more
                <span class="text-primary">uptime</span>.
              </h2>
              <h5 class="w400 mt-3">
                The apps we build run natively both on iOS and Android, and they
                are built from a single code base. That means less maintenance,
                better and more continuous user engagement.
              </h5>
            </div>
          </b-col>
        </b-row>
      </section>
      <!-- Fast and efficient -->
      <section class="py-4 py-md-5">
        <b-row align-v="center" align-h="around">
          <b-col cols="12" md="6" class="px-md-5" order="2" order-md="1">
            <h2 class="text-center text-md-left w800 mt-2 mt-md-0">
              <span class="text-primary">Fast</span> and
              <span class="text-primary">efficient</span>.
            </h2>
            <h5 class="w400 mt-3">
              Since we don’t have to deal with the problems of both iOS and
              Android seperately, we can work much faster and more efficiently.
              So, we bring more value while costing less.
            </h5>
          </b-col>
          <b-col cols="11" md="5" class="mt-4 mt-md-0" order="1" order-md="2">
            <img
              src="~/assets/images/fast-efficient.svg"
              alt="Fast and efficient"
              class="w-100"
            />
          </b-col>
        </b-row>
      </section>
      <!-- Cutting edge -->
      <section class="py-4 py-md-5">
        <b-row align-v="center" align-h="around">
          <b-col cols="11" md="5" class="mt-4 mt-md-0">
            <img
              src="~/assets/images/cutting-edge.svg"
              alt="Cutting-edge"
              class="w-100"
            />
          </b-col>
          <b-col cols="12" md="6" class="px-md-5">
            <h2 class="text-center text-md-left w800 mt-2 mt-md-0">
              Always <span class="text-primary">up to date</span> with
              <span class="text-primary">cutting-edge</span> tech.
            </h2>
            <h5 class="w400 mt-3">
              We’re following upcoming trends in software development very
              closely, to get you ahead of the competition. That’s why we are
              currently using Google’s cross-platform application development
              framework, Flutter.
            </h5>
          </b-col>
        </b-row>
      </section>
    </b-container>
    <!-- Apps -->
    <section class="py-5 mt-md-4">
      <b-container fluid class="my-container px-3">
        <h2 class="w800 text-center">Check out Our Apps</h2>
        <b-row align-v="center" align-h="center" class="mt-0 mt-md-4">
          <AppCard
            website="natrium.io"
            playStore="play.google.com/store/apps/details?id=co.banano.natriumwallet"
            appStore="itunes.apple.com/us/app/natrium/id1451425707"
            appName="Natrium"
            rating="4.9"
          />
          <AppCard
            website="blaisewallet.com"
            playStore="play.google.com/store/apps/details?id=com.appditto.blaise"
            appStore="apps.apple.com/us/app/blaise-pascal-wallet/id1473011216"
            appName="Blaise"
            rating="4.8"
          />
          <AppCard
            website="kalium.banano.cc"
            playStore="play.google.com/store/apps/details?id=com.banano.kaliumwallet&hl=en_US"
            appStore="itunes.apple.com/us/app/kalium/id1449623414"
            appName="Kalium"
            rating="4.5"
          />
        </b-row>
      </b-container>
      <img
        src="~/assets/images/testimonials.png"
        alt="Testimonials"
        class="w-100 mt-4 d-none d-lg-block"
      />
      <img
        src="~/assets/images/testimonials-md.png"
        alt="Testimonials Md"
        class="w-100 mt-4 d-none d-md-block d-lg-none"
      />
    </section>
    <b-container fluid class="my-container px-4">
      <!-- Blog -->
      <section class="py-5">
        <b-row align-h="center">
          <b-col cols="12"
            ><h2 class="w800 text-center">Read Our Blog</h2></b-col
          >
          <BlogCard
            :title="blogPostOneTitle"
            alt="Flutter Automation"
            :thumbnail="blogPostOneThumbnail"
            :link="blogPostOneLink"
          />
          <BlogCard
            :title="blogPostTwoTitle"
            alt="Natrium Audit"
            :thumbnail="blogPostTwoThumbnail"
            :link="blogPostTwoLink"
          />
          <BlogCard
            :title="blogPostThreeTitle"
            alt="Blaise Release"
            :thumbnail="blogPostThreeThumbnail"
            :link="blogPostThreeLink"
          />
        </b-row>
      </section>
      <!-- Contact -->
      <section class="pt-2 pb-5">
        <b-row align-h="center">
          <b-col cols="12">
            <b-row align-h="center">
              <b-col cols="12" md="5">
                <img
                  src="~/assets/images/chat.svg"
                  alt="Chat"
                  class="w-100 mt-4"
                />
              </b-col>
            </b-row>
            <h2 class="w800 text-center">
              Want to have a chat?<br />Send an email or fill the form.
            </h2>
            <b-row align-h="center">
              <b-col cols="12" md="4" lg="3" v-if="!expanded">
                <b-btn
                  href="mailto:hello@appditto.com"
                  variant="primary"
                  size="lg"
                  rounded
                  class="w800 mt-3 grow-2 btn-shdw-primary w-100"
                  >Send an Email</b-btn
                >
              </b-col>
              <b-col cols="12" md="4" lg="3">
                <b-btn
                  :variant="expanded ? 'outline-primary' : 'primary'"
                  size="lg"
                  rounded
                  @click="expanded = !expanded"
                  class="w800 mt-3 grow-2 btn-shdw-primary w-100 border-2"
                  >{{ expanded ? 'Close' : 'Contact Form' }}</b-btn
                >
              </b-col>
            </b-row>
            <!-- FORM -->
            <MyForm :expanded="expanded" />
          </b-col>
        </b-row>
      </section>
    </b-container>
    <!-- Footer -->
    <Footer />
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
import AppCard from '~/components/AppCard.vue'
import BlogCard from '~/components/BlogCard.vue'
import Footer from '~/components/Footer.vue'
import MyForm from '~/components/MyForm.vue'
import Axios from 'axios'
export default {
  data() {
    return {
      homePageDescription:
        "We're building beautiful apps for businesses in record time, using cutting-edge tech.",
      homePageTitle: 'Appditto | Beautiful apps in record time',
      homePagePreview: 'https://appditto.com/images/preview.jpg',
      homePageThemeColor: '#4082FF',
      expanded: false,
      blogPostOneTitle: '',
      blogPostTwoTitle: '',
      blogPostThreeTitle: '',
      blogPostOneThumbnail: '',
      blogPostTwoThumbnail: '',
      blogPostThreeThumbnail: '',
      blogPostOneLink: '',
      blogPostTwoLink: '',
      blogPostThreeLink: ''
    }
  },
  components: {
    Navbar,
    AppCard,
    BlogCard,
    MyForm,
    Footer
  },
  mounted: function() {
    Axios.get(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@appditto'
    )
      .then(response => {
        const items = response.data.items
        this.blogPostOneTitle = items[0].title.replace(/amp;/g, ' ')
        this.blogPostTwoTitle = items[1].title.replace(/amp;/g, ' ')
        this.blogPostThreeTitle = items[2].title.replace(/amp;/g, ' ')
        this.blogPostOneThumbnail = items[0].thumbnail
        this.blogPostTwoThumbnail = items[1].thumbnail
        this.blogPostThreeThumbnail = items[2].thumbnail
        this.blogPostOneLink = items[0].guid
        this.blogPostTwoLink = items[1].guid
        this.blogPostThreeLink = items[2].guid
      })
      .catch(err => console.log(err))
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

