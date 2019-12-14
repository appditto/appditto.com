<template>
  <b-row align-h="center" class="p-3">
    <nuxt-link :to="{ path: url }" class="w-100">
      <div class="blog-card overflow-hidden bg-light">
        <b-row align-h="center">
          <b-col>
            <div class="blog-card-image-container">
              <img :src="img" :alt="alt" class="blog-card-image" />
            </div>
            <div class="px-4 pt-4 pb-2">
              <h5 class="text-dark w700">{{ title }}</h5>
              <p class="op-50 text-dark">
                {{ formatDate(date) }} • {{ readingTime }} min read
              </p>
            </div>
          </b-col>
        </b-row>
      </div>
    </nuxt-link>
  </b-row>
</template>
<script>
import Vue from 'vue'
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