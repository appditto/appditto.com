<template>
  <div>
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<style>
*,
*:before,
*:after {
  margin: 0;
}
</style>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>