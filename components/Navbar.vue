<template>
  <b-container fluid class="px-0 pb-1" v-bind:class="{'homeNavbar':!isBlog&&!isErrorPage } ">
    <div class="my-container-big">
      <b-row align-h="between" align-v="center" class="py-3 px-2">
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
          <b-btn
            rounded
            v-bind:class="{ 'px-3 btn-primary btn-shdw-primary': isBlog , 'btn-light text-primary btn-shadow-dark px-4 px-md-5': !isBlog }"
            class="w800 grow-2"
          >{{ isBlog ? 'Appditto.com' : 'Blog' }}</b-btn>
        </nuxt-link>
      </b-row>
    </div>
  </b-container>
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

<style>
.homeNavbar {
  position: absolute;
  top: 0;
  z-index: 100000;
}
</style>