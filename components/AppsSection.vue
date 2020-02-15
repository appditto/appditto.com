<template>
  <section class="px-5 py-12" id="apps">
    <div class="container-xl md:mt-4">
      <h2 class="text-3xl leading-tight font-extrabold text-center">Check Out Our Apps</h2>
      <div class="flex flex-row flex-wrap justify-center items-center mt-0 mt-md-4">
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
      </div>
    </div>
    <Testimonials />
  </section>
</template>
<script>
import Vue from 'vue'
import AppCard from '~/components/AppsSection/AppCard.vue'
import Testimonials from '~/components/AppsSection/Testimonials.vue'
export default Vue.extend({
  name: 'AppsSection',
  components: {
    AppCard,
    Testimonials
  }
})
</script>