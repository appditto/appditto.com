<template>
  <div>
    <Navbar />
    <nuxt class="min-h-screen" />
    <Footer :hasBackground="true" :hasTopMargin="true" />
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import('~/components/Navbar.vue'),
    Footer: () => import('~/components/Footer.vue')
  }
}
</script>