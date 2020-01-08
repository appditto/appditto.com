<template>
  <div>
    <Navbar />
    <nuxt class="mh100" />
    <Footer :hasBackground="true" :hasTopMargin="true" />
  </div>
</template>

<style scoped>
*,
*:before,
*:after {
  margin: 0;
}
.mh100 {
  min-height: 100vh;
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