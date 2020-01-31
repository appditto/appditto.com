<template>
  <div class="flex flex-row flex-wrap justify-center px-3">
    <nuxt-link :to="{ path: url }" class="w-full">
      <div class="blog-card bg-light">
        <div class="flex flex-row justify-center items-stretch">
          <div class="flex flex-col lg:w-1/3 relative overflow-hidden">
            <img
              :datasizes="'auto'"
              :src="`https://res.cloudinary.com/appditto/image/fetch/w_900,c_limit,q_80,f_auto/${img}`"
              :srcset="cloudinaryUrl100w+img"
              :data-srcset="cloudinaryUrl300w+img+' 300w,'+cloudinaryUrl600w+img+' 600w,'+cloudinaryUrl900w+img+' 900w,'+cloudinaryUrl1200w+img+' 1200w,'+cloudinaryUrl1500w+img+' 1500w, '+cloudinaryUrl2000w+img+' 2000w'"
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
  data: function() {
    return {
      cloudinaryUrl100w:
        'https://res.cloudinary.com/appditto/image/fetch/w_100,c_limit,q_1,f_auto,pg_1/',
      cloudinaryUrl300w:
        'https://res.cloudinary.com/appditto/image/fetch/w_300,c_limit,q_80,f_auto/',
      cloudinaryUrl600w:
        'https://res.cloudinary.com/appditto/image/fetch/w_600,c_limit,q_80,f_auto/',
      cloudinaryUrl900w:
        'https://res.cloudinary.com/appditto/image/fetch/w_900,c_limit,q_80,f_auto/',
      cloudinaryUrl1200w:
        'https://res.cloudinary.com/appditto/image/fetch/w_1200,c_limit,q_80,f_auto/',
      cloudinaryUrl1500w:
        'https://res.cloudinary.com/appditto/image/fetch/w_1500,c_limit,q_80,f_auto/',
      cloudinaryUrl2000w:
        'https://res.cloudinary.com/appditto/image/fetch/w_2000,c_limit,q_80,f_auto/'
    }
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