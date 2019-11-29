<template>
  <b-row align-h="center" class="p-3">
    <nuxt-link :to="{ path: url }" class="w-100">
      <div class="blog-card overflow-hidden bg-light">
        <b-row align-h="center">
          <b-col>
            <h5 class="text-dark w700 m-4">{{ title }}</h5>
            <img :src="img" :alt="alt" class="w-100" />
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
    url: null
  }
})
</script>