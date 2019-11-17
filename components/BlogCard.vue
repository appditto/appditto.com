<template>
  <b-col cols="12" md="4" class="mt-4">
    <a :href="link" target="_blank">
      <div class="blog-card overflow-hidden bg-light">
        <b-row align-h="center">
          <b-col>
            <h5 class="text-dark w700 m-4">{{ title }}</h5>
            <img :src="thumbnail" :alt="alt" class="w-100" />
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
    title: null,
    alt: null,
    thumbnail: null,
    link: null
  }
})
</script>