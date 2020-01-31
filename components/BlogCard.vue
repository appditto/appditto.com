<template>
  <div class="flex flex-row flex-wrap p-3">
    <nuxt-link :to="{ path: url }" class="w-full">
      <div class="blog-card bg-light">
        <div class="flex flex-row flex-wrap">
          <div class="flex flex-col w-full">
            <div class="blog-card-image-container">
              <img
                :datasizes="'auto'"
                :src="`https://res.cloudinary.com/appditto/image/fetch/w_900,c_limit,q_80,f_auto/${img}`"
                :srcset="cloudinaryUrl30w+img"
                :data-srcset="cloudinaryUrl300w+img+' 300w,'+cloudinaryUrl600w+img+' 600w,'+cloudinaryUrl900w+img+' 900w,'+cloudinaryUrl1200w+img+' 1200w,'+cloudinaryUrl1500w+img+' 1500w, '+cloudinaryUrl2000w+img+' 2000w'"
                :alt="alt"
                class="blog-card-image w-full lazyload"
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
  data: function() {
    return {
      cloudinaryUrl30w:
        'https://res.cloudinary.com/appditto/image/fetch/w_30,pg_1,c_limit,q_80,f_auto/',
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