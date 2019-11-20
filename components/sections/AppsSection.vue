<template>
  <section class="py-5 mt-md-4" id="apps">
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
      src="~/assets/images/testimonials.svg"
      alt="Testimonials"
      class="w-100 mt-4 d-none d-lg-block"
    />
    <img
      src="~/assets/images/testimonials-md.svg"
      alt="Testimonials Md"
      class="w-100 mt-4 d-none d-md-block d-lg-none"
    />
  </section>
</template>
<script>
import Vue from 'vue'
import AppCard from '~/components/AppCard.vue'
export default Vue.extend({
  name: 'AppsSection',
  components: {
    AppCard
  }
})
</script>