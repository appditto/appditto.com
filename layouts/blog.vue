<template>
  <div class="pt-5rem">
    <Navbar :isBlog="true" id="navbarPostPage" />
    <nuxt class="mh100" />
    <Footer :hasBackground="true" :hasTopMargin="true" />
  </div>
</template>

<style scoped>
*,
*:before,
*:after {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.mh100 {
  min-height: 100vh;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.2s ease-out;
  transform: translateY(0);
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translateY(1rem);
}
</style>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  },
  mounted() {
    // Initial state
    var scrollPos = 0
    const navbar = document.getElementById('navbarPostPage')
    // Adding scroll event
    window.addEventListener('scroll', function() {
      // Detects new state and compares it with the new one
      if (
        window.pageYOffset < 50 ||
        document.body.getBoundingClientRect().top > scrollPos + 10
      ) {
        navbar.style.marginTop = '0rem'
      } else if (
        window.pageYOffset >= 100 &&
        document.body.getBoundingClientRect().top < scrollPos - 10
      ) {
        navbar.style.marginTop = '-6rem'
      }
      // Saves the new position for iteration.
      scrollPos = document.body.getBoundingClientRect().top

      // navbar shadow
      if (
        window.pageYOffset >= 50 &&
        !navbar.classList.contains('navbar-shadow')
      ) {
        navbar.classList.add('navbar-shadow')
      } else if (
        window.pageYOffset < 50 &&
        navbar.classList.contains('navbar-shadow')
      ) {
        navbar.classList.remove('navbar-shadow')
      }
    })
  }
}
</script>
