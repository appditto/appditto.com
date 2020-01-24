<template>
  <b-row align-h="center" class="p-3">
    <nuxt-link :to="{ path: url }" class="w-100">
      <div class="blog-card overflow-hidden bg-light">
        <b-row align-h="center">
          <b-col>
            <div class="blog-card-image-container">
              <v-lazy-image
                :src-placeholder="require('~/assets/images/placeholder.svg')"
                :src="'https://res.cloudinary.com/appditto/image/fetch/q_50,f_auto,w_auto/'+ img"
                :alt="alt"
                sizes="100vw"
                class="blog-card-image"
              />
            </div>
            <div class="px-4 pt-4 pb-2">
              <h5 class="text-dark w700">{{ title }}</h5>
              <p class="op-75 text-dark">{{ formatDate(date) }} • {{ readingTime }} min read</p>
            </div>
          </b-col>
        </b-row>
      </div>
    </nuxt-link>
  </b-row>
</template>
<script>
import Vue from 'vue'
import VLazyImage from 'v-lazy-image'
export default Vue.extend({
  name: 'BlogCard',
  components: {
    VLazyImage
  },
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

<style scoped>
.v-lazy-image {
  opacity: 0.5;
  transition: all 0.5s;
}
.v-lazy-image-loaded {
  opacity: 1;
}
</style>