<template>
  <div>
    <Navbar />
    <nuxt class="min-h-screen" />
    <Footer :hasBackground="true" :hasTopMargin="true" />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
export default {
  components: {
    Navbar,
    Footer: () => import('~/components/Footer.vue')
  }
}
</script>