<template>
  <b-row align-h="between" align-v="center" class="p-3">
    <a v-if="!isBlog" href="/"
      ><img
        src="~/assets/images/appditto-logos/appditto-logo-horizontal.svg"
        alt="Appditto Logo"
        class="logo-horizontal grow-2"
    /></a>
    <a v-if="isBlog" href="https://blog.appditto.com"
      ><img
        src="~/assets/images/appditto-logos/appditto-blog-logo-horizontal.svg"
        alt="Appditto Blog Logo"
        class="logo-horizontal grow-2"
    /></a>
    <b-btn
      :href="isBlog ? 'https://appditto.com' : 'https://blog.appditto.com'"
      variant="primary"
      rounded
      class="w700 px-4 px-md-5 grow-2 btn-shdw-primary"
      >{{ isBlog ? 'appditto.com' : 'Blog' }}</b-btn
    >
  </b-row>
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