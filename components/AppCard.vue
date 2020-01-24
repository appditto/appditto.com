<template>
  <b-col cols="12" md="4" class="mt-4 mt-md-0">
    <a :href="'https://' + website" target="_blank" rel="noopener">
      <div class="my-card">
        <b-col class="p-0">
          <div class="my-card-top bg-gradient py-3">
            <b-col>
              <b-row align-h="center">
                <img
                  :src="
                    require('~/assets/images/app-icons/' +
                      appName.toLowerCase() +
                      '-icon.svg')
                  "
                  :alt="appName"
                  class="app-icon justify-self-center"
                />
              </b-row>
              <p class="text-center text-white w700 h3">{{ appName }}</p>
            </b-col>
          </div>
          <div class="my-card-bottom py-4 px-2">
            <b-col>
              <p class="text-center text-primary w700 h5">User Rating</p>
              <b-row align-h="center">
                <img
                  :src="
                    require('~/assets/images/stars/stars-' + rating + '.svg')
                  "
                  :alt="'Star' + rating"
                  class="stars-icon"
                />
              </b-row>
              <b-row align-h="center" class="mt-3">
                <b-btn
                  :href="'https://' + playStore"
                  target="_blank"
                  rel="noopener"
                  variant="primary"
                  size="lg"
                  rounded
                  class="mt-3 mx-2 grow-2 btn-shdw-primary px-2"
                >
                  <img
                    src="~/assets/images/buttons/playstore-button.svg"
                    alt="Play Store Button"
                    class="store-button"
                  />
                </b-btn>
                <b-btn
                  :href="'https://' + appStore"
                  target="_blank"
                  rel="noopener"
                  variant="primary"
                  size="lg"
                  rounded
                  class="mt-3 mx-2 grow-2 btn-shdw-primary px-2"
                >
                  <img
                    src="~/assets/images/buttons/appstore-button.svg"
                    alt="App Store Button"
                    class="store-button"
                  />
                </b-btn>
              </b-row>
            </b-col>
          </div>
        </b-col>
      </div>
    </a>
  </b-col>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'AppCard',
  props: {
    appName: null,
    rating: null,
    playStore: null,
    appStore: null,
    website: null
  }
})
</script>