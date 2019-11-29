<template>
  <b-row align-h="between" align-v="center" class="p-3">
    <a href="/"
      ><img
        src="~/assets/images/appditto-logos/appditto-logo-horizontal.svg"
        alt="Appditto Logo Horizontal"
        class="logo-horizontal grow-2"
    /></a>
    <b-btn
      href="https://blog.appditto.com"
      variant="primary"
      rounded
      class="w700 px-4 px-md-5 grow-2 btn-shdw-primary"
      >Blog</b-btn
    >
  </b-row>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'Navbar'
})
</script>