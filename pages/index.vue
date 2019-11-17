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
              src="~/static/images/hero-phones.png"
              alt="Hero"
              class="w-100"
            />
          </b-col>
        </b-row>
      </section>
      <!-- Single codebase -->
      <section class="py-5">
        <b-row align-v="center" align-h="around">
          <b-col cols="12" md="4" class="mt-4 mt-md-0">
            <img
              src="~/static/images/single-codebase.svg"
              alt="Single codebase"
              class="w-100"
            />
          </b-col>
          <b-col cols="12" md="7" class="px-md-5">
            <div class="pl-md-5">
              <h2 class="text-center text-md-left w800">
                Less maintenance,<br />more
                <span class="text-primary">uptime</span>.
              </h2>
              <h5 class="w400">
                The apps we build run natively both on iOS and Android, and they
                are built from a single code base. That means less maintenance,
                better and more continuous user engagement.
              </h5>
            </div>
          </b-col>
        </b-row>
      </section>
      <!-- Fast and efficient -->
      <section class="py-5">
        <b-row align-v="center" align-h="around">
          <b-col cols="12" md="6" class="px-md-5" order="2" order-lg="1">
            <h2 class="text-center text-md-left w800">
              <span class="text-primary">Fast</span> and
              <span class="text-primary">efficient</span>.
            </h2>
            <h5 class="w400">
              Since we don’t have to deal with the problems of both iOS and
              Android seperately, we can work much faster and more efficiently.
              So, we bring more value while costing less.
            </h5>
          </b-col>
          <b-col cols="12" md="5" class="mt-4 mt-md-0" order="1" order-lg="2">
            <img
              src="~/static/images/fast-efficient.svg"
              alt="Fast and efficient"
              class="w-100"
            />
          </b-col>
        </b-row>
      </section>
      <!-- Cutting edge -->
      <section class="py-5">
        <b-row align-v="center" align-h="around">
          <b-col cols="12" md="5" class="mt-4 mt-md-0">
            <img
              src="~/static/images/cutting-edge.svg"
              alt="Cutting-edge"
              class="w-100"
            />
          </b-col>
          <b-col cols="12" md="6" class="px-md-5">
            <h2 class="text-center text-md-left w800">
              Always <span class="text-primary">up to date</span> with
              <span class="text-primary">cutting-edge</span> tech.
            </h2>
            <h5 class="w400">
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
      <b-container fluid class="my-container px-4">
        <h2 class="w800 text-center">Check out Our Apss</h2>
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
        src="~/static/images/testimonials.png"
        alt="Testimonials"
        class="w-100 mt-4 d-none d-md-block"
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
                  src="~/static/images/chat.svg"
                  alt="Chat"
                  class="w-100 mt-4"
                />
              </b-col>
            </b-row>
            <h2 class="w800 text-center">
              Want to have a chat?<br />Send an email or fill the form.
            </h2>
            <b-row align-h="center">
              <b-col cols="12" md="3" v-if="!expanded">
                <b-btn
                  href="mailto:hello@appditto.com"
                  variant="primary"
                  size="lg"
                  rounded
                  class="w800 mt-3 grow-2 btn-shdw-primary w-100"
                  >Send an Email</b-btn
                >
              </b-col>
              <b-col cols="12" md="3">
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
  components: {
    Navbar,
    AppCard,
    BlogCard,
    MyForm,
    Footer
  },
  data() {
    return {
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
  }
}
</script>

