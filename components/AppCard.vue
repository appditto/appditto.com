<template>
  <b-col cols="12" md="4" class="mt-5 mt-md-0">
    <div class="my-card">
      <b-col class="p-0">
        <div class="my-card-top bg-primary py-4">
          <b-col>
            <b-row align-h="center">
              <img
                :src="
                  require('~/static/images/app-icons/' +
                    appName.toLowerCase() +
                    '-icon.png')
                "
                alt="Natrium"
                class="app-icon justify-self-center"
              />
            </b-row>
            <p class="text-center text-white w700 h3">{{ appName }}</p>
          </b-col>
        </div>
        <div class="my-card-bottom py-4">
          <b-col>
            <p class="text-center text-primary w700 h4">
              User Rating
            </p>
            <b-row align-h="center">
              <img
                :src="require('~/static/images/stars/stars-' + rating + '.svg')"
                :alt="'Star' + rating"
                class="stars-icon px-5"
              />
            </b-row>
            <b-row align-h="center" class="mt-4">
              <b-btn variant="primary" size="lg" rounded class="mt-2 mx-2"
                ><img
                  src="~/static/images/buttons/playstore-button.svg"
                  alt="Play Store Button"
                  class="store-button"
              /></b-btn>
              <b-btn variant="primary" size="lg" rounded class="mt-2 mx-2"
                ><img
                  src="~/static/images/buttons/appstore-button.svg"
                  alt="App Store Button"
                  class="store-button"
              /></b-btn>
            </b-row>
          </b-col>
        </div>
      </b-col>
    </div>
  </b-col>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'AppCard',
  props: {
    appName: null,
    rating: null
  }
})
</script>