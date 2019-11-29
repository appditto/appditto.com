<template>
  <b-container fluid class="my-container-big">
    <b-row align-h="between" align-v="center" class="p-3">
      <nuxt-link v-if="!isBlog" to="/"
        ><img
          src="~/assets/images/appditto-logos/appditto-logo-horizontal.svg"
          alt="Appditto Logo"
          class="logo-horizontal grow-2"
      /></nuxt-link>
      <nuxt-link v-if="isBlog" to="/blog"
        ><img
          src="~/assets/images/appditto-logos/appditto-blog-logo-horizontal.svg"
          alt="Appditto Blog Logo"
          class="logo-horizontal grow-2"
      /></nuxt-link>
      <nuxt-link :to="isBlog ? '/' : '/blog'"
        ><b-btn
          variant="primary"
          rounded
          v-bind:class="{ 'px-md-5': !isBlog }"
          class="w700 px-4 grow-2 btn-shdw-primary"
          >{{ isBlog ? 'Appditto.com' : 'Blog' }}</b-btn
        ></nuxt-link
      >
    </b-row>
  </b-container>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'Navbar',
  props: {
    isBlog: false
  }
})
</script>