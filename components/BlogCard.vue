<template>
  <b-col cols="12" md="4" class="mt-4">
    <a href="">
      <div class="blog-card overflow-hidden">
        <b-row align-h="center">
          <b-col>
            <h5 class="text-dark w700 m-4">{{ header }}</h5>
            <img
              :src="require('~/static/images/' + img)"
              :alt="alt"
              class="w-100"
            />
          </b-col>
        </b-row>
      </div>
    </a>
  </b-col>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'BlogCard',
  props: {
    header: null,
    alt: null,
    img: null
  }
})
</script>