<template>
  <b-row align-h="center" class="p-3">
    <nuxt-link :to="{ path: url }" class="w-100">
      <div class="blog-card overflow-hidden bg-light">
        <b-row align-h="center" align-v="center" class="d-flex">
          <div class="blog-card-wide-image-container d-flex justify-content-center pl-3">
            <img
              :src="require('~/assets/images/placeholder.svg')"
              :data-src="'https://res.cloudinary.com/appditto/image/fetch/q_70,f_auto,w_auto/'+ img"
              :alt="alt"
              class="blog-card-wide-image lazyload"
            />
          </div>
          <b-col>
            <div class="py-2">
              <div class="pl-4 pr-5 py-4">
                <div class="position-relative">
                  <div class="blog-card-wide-text">
                    <h4 class="text-dark w700 break-word">{{ title }}</h4>
                    <p class="op-75 text-dark">{{ formatDate(date) }} • {{ readingTime }} min read</p>
                    <p class="text-dark mb-0">{{ excerpt }}</p>
                  </div>
                  <div class="text-gradient"></div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </nuxt-link>
  </b-row>
</template>
<script>
import Vue from 'vue'
import 'lazysizes'
export default Vue.extend({
  name: 'BlogCardWide',
  props: {
    title: null,
    alt: null,
    img: null,
    url: null,
    date: null,
    readingTime: null,
    excerpt: null
  },
  methods: {
    formatDate(date) {
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
      let thisDate = new Date(date)
      let formattedDate =
        thisDate.getDate() +
        ' ' +
        months[thisDate.getMonth()] +
        ', ' +
        thisDate.getFullYear()
      return formattedDate
    }
  }
})
</script>