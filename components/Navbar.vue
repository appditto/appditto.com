<template>
  <div class="w-full" v-bind:class="{'absolute top-0 z-50':!isBlog&&!isErrorPage } ">
    <div class="container-xl px-4 py-4">
      <div class="flex flex-row justify-between items-center">
        <nuxt-link v-if="!isBlog" to="/">
          <img
            src="~/assets/images/appditto-logos/appditto-logo-horizontal-white.svg"
            alt="Appditto Logo"
            class="logo-horizontal grow-2"
          />
        </nuxt-link>
        <nuxt-link v-else to="/blog">
          <img
            src="~/assets/images/appditto-logos/appditto-blog-logo-horizontal.svg"
            alt="Appditto Blog Logo"
            class="logo-horizontal grow-2"
          />
        </nuxt-link>
        <nuxt-link :to="isBlog ? '/' : '/blog'">
          <button
            v-bind:class="{ 'text-light bg-gradient-blue font-bold btn-shdw-primary px-3 md:px-6 py-2 rounded': isBlog , 'text-primary bg-light font-extrabold btn-shadow-dark px-6 md:px-12 py-2 rounded': !isBlog }"
            class="text-base grow-2"
          >{{ isBlog ? 'Appditto.com' : 'Blog' }}</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'Navbar',
  props: {
    isBlog: false,
    isErrorPage: false
  }
})
</script>