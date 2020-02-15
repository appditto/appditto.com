<template>
  <div class="w-full md:w-1/3 mt-8 mt-md-0 px-0 md:px-3">
    <a :href="'https://' + website" target="_blank" rel="noopener">
      <div class="my-card">
        <div class="flex flex-col">
          <div class="my-card-top bg-gradient-blue py-6">
            <div class="flex flex-col">
              <div class="flex flex-row justify-center">
                <img
                  :src="
                    require('~/assets/images/app-icons/' +
                      appName.toLowerCase() +
                      '-icon.svg')
                  "
                  :alt="appName"
                  class="w-40 h-40 justify-self-center"
                />
              </div>
              <p class="text-2xl text-center text-light font-bold">{{ appName }}</p>
            </div>
          </div>
          <div class="my-card-bottom py-6 px-2">
            <div class="flex flex-col">
              <p class="text-xl text-center text-primary font-bold">User Rating</p>
              <div class="flex flex-row justify-center mt-1">
                <img
                  :src="
                    require('~/assets/images/stars/stars-' + rating + '.svg')
                  "
                  :alt="'Star' + rating"
                  class="stars-icon"
                />
              </div>
              <div class="flex flex-row flex-wrap justify-center mt-4">
                <button
                  :href="'https://' + playStore"
                  target="_blank"
                  rel="noopener"
                  class="bg-gradient-blue btn-shdw-primary px-3 py-2 mt-3 mx-2 grow-2 rounded"
                >
                  <img
                    src="~/assets/images/buttons/playstore-button.svg"
                    alt="Play Store Button"
                    class="store-button"
                  />
                </button>
                <button
                  :href="'https://' + appStore"
                  target="_blank"
                  rel="noopener"
                  class="bg-gradient-blue btn-shdw-primary px-3 py-2 mt-3 mx-2 grow-2 rounded"
                >
                  <img
                    src="~/assets/images/buttons/appstore-button.svg"
                    alt="App Store Button"
                    class="store-button"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
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