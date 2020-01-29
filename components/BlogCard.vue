<template>
  <div class="flex flex-row flex-wrap p-3">
    <nuxt-link :to="{ path: url }" class="w-full">
      <div class="blog-card bg-light">
        <div class="flex flex-row flex-wrap">
          <div class="flex flex-col w-full">
            <div class="blog-card-image-container">
              <img
                :src="require('~/assets/images/placeholder.svg')"
                :data-src="'https://res.cloudinary.com/appditto/image/fetch/q_70,f_auto/'+ img"
                :alt="alt"
                class="blog-card-image lazyload"
              />
            </div>
            <div class="px-6 py-6">
              <h5 class="text-xl leading-snug text-dark font-bold">{{ title }}</h5>
              <p
                class="opacity-75 text-dark mt-2"
              >{{ formatDate(date) }} • {{ readingTime }} min read</p>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
import Vue from 'vue'
import 'lazysizes'
export default Vue.extend({
  name: 'BlogCard',
  props: {
    title: null,
    alt: null,
    img: null,
    url: null,
    date: null,
    readingTime: null
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