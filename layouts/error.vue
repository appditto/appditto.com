<template>
  <div class="bg-gradient mh100 d-flex flex-column">
    <Navbar :isErrorPage="true" />
    <b-container
      fluid
      class="my-container-big flex-grow-100 d-flex align-items-center justify-content-center my-5"
    >
      <b-row align-h="center" align-v="center">
        <b-col cols="12">
          <b-row align-h="center" align-v="center">
            <b-col cols="10">
              <img
                src="~/assets/images/404.svg"
                alt="404 Illustration"
                class="w-100 window-animation"
              />
            </b-col>
          </b-row>
          <div v-if="error.statusCode === 404" class="mt-3 mt-md-4">
            <h1 class="text-white w700 h1 text-center">Oops...</h1>
            <h2 class="text-white w400 h5 text-center">This page doesn't exist.</h2>
          </div>
          <h1 class="text-white w700 h3 text-center mt-40" v-else>An error occurred</h1>
          <b-row align-h="center" align-v="center">
            <nuxt-link to="/">
              <b-btn
                rounded
                size="lg"
                class="w800 grow-2 btn-light text-primary btn-shadow-dark px-4 px-md-5 mt-2"
              >Go Back Home</b-btn>
            </nuxt-link>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <Footer :hasTopMargin="false" />
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
.flex-grow-100 {
  flex-grow: 100;
}
.window-animation {
  transform: translateY(-0.5rem) rotateZ(-2deg);
  animation-name: windowAnimation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
@keyframes windowAnimation {
  0% {
    transform: translateY(-0.5rem) rotateZ(-2deg);
  }
  25% {
    transform: translateY(0rem);
  }
  50% {
    transform: translateY(-0.5rem) rotateZ(2deg);
  }
  75% {
    transform: translateY(0rem);
  }
  100% {
    transform: translateY(-0.5rem) rotateZ(-2deg);
  }
}
</style>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
export default {
  props: ['error'],
  layout: 'policy',
  components: {
    Navbar,
    Footer
  }
}
</script>