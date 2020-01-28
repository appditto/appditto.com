<template>
  <div class="flex flex-row flex-wrap justify-center px-3">
    <nuxt-link :to="{ path: url }" class="w-full">
      <div class="blog-card bg-light">
        <div class="flex flex-row justify-center items-stretch">
          <div class="flex flex-col lg:w-1/3 relative overflow-hidden">
            <img
              :src="require('~/assets/images/placeholder.svg')"
              :data-src="'https://res.cloudinary.com/appditto/image/fetch/q_70,f_auto/'+ img"
              :alt="alt"
              class="lazyload absolute h-full object-cover"
            />
          </div>
          <div class="flex flex-col lg:w-2/3 justify-center px-12 py-8">
            <h4 class="text-2xl leading-snug text-dark font-bold break-words">{{ title }}</h4>
            <p
              class="text-normal opacity-75 text-dark mt-2"
            >{{ formatDate(date) }} • {{ readingTime }} min read</p>
            <p class="text-normal text-dark mt-4">{{ excerpt }}</p>
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