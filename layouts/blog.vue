<template>
  <div class="pt-20">
    <Navbar :isBlog="true" id="navbarBlog" />
    <nuxt class="min-h-screen" />
    <Footer :hasBackground="true" :hasTopMargin="true" />
  </div>
</template>

<style lang="scss">
#navbarBlog {
  background-color: white;
  width: 100%;
  position: fixed;
  top: 0;
  transition: all 0.4s ease;
  z-index: 10000;
}
.navbar-shadow {
  box-shadow: 0 0.5rem 1rem 0 rgba(#000, 0.08);
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
export default {
  components: {
    Navbar,
    Footer: () => import('~/components/Footer.vue')
  },
  data: function() {
    return {
      scrollPos: 0
    }
  },
  methods: {
    navbarScroll() {
      // Detects new state and compares it with the new one
      if (
        window.pageYOffset < 50 ||
        document.body.getBoundingClientRect().top > this.scrollPos + 10
      ) {
        navbarBlog.style.marginTop = '0rem'
      } else if (
        window.pageYOffset >= 100 &&
        document.body.getBoundingClientRect().top < this.scrollPos - 10
      ) {
        navbarBlog.style.marginTop = '-6rem'
      }
      // Saves the new position for iteration.
      this.scrollPos = document.body.getBoundingClientRect().top

      // navbar shadow
      if (
        window.pageYOffset >= 50 &&
        !navbarBlog.classList.contains('navbar-shadow')
      ) {
        navbarBlog.classList.add('navbar-shadow')
      } else if (
        window.pageYOffset < 50 &&
        navbarBlog.classList.contains('navbar-shadow')
      ) {
        navbarBlog.classList.remove('navbar-shadow')
      }
    }
  },
  mounted() {
    // Adding scroll event
    window.addEventListener('scroll', this.navbarScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.navbarScroll)
  }
}
</script>
