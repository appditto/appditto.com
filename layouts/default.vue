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
export default {
  components: {
    Navbar: () => import('~/components/Navbar.vue'),
    Footer: () => import('~/components/Footer.vue')
  }
}
</script>