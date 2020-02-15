<template>
  <div class="bg-gradient-blue min-h-screen flex flex-col">
    <Navbar :isErrorPage="true" />
    <div class="container-xl px-6 flex flex-col flex-grow items-center justify-center my-5 mx-auto">
      <div class="w-5/6">
        <img src="~/assets/images/404.svg" alt="404 Illustration" class="w-full window-animation" />
      </div>
      <div v-if="error.statusCode === 404" class="mt-3 md:mt-5">
        <h1 class="text-4xl text-light font-bold h1 text-center">Oops...</h1>
        <h2 class="text-xl text-light text-center">This page doesn't exist.</h2>
      </div>
      <div v-else class="mt-3 md:mt-5">
        <h1 class="text-4xl text-light font-bold h1 text-center">Oops...</h1>
        <h2 class="text-xl text-light text-center">An error occurred.</h2>
      </div>
      <div class="flex flex-row flex-wrap justify-center items-center mt-5">
        <nuxt-link to="/">
          <button
            class="text-xl font-bold bg-light text-primary w800 grow-2 btn-shadow-dark px-6 md:px-12 py-2 rounded"
          >Go Back Home</button>
        </nuxt-link>
      </div>
    </div>
    <Footer :hasTopMargin="false" />
  </div>
</template>

<style scoped>
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
export default {
  props: ['error'],
  layout: 'policy',
  components: {
    Navbar,
    Footer: () => import('~/components/Footer.vue')
  }
}
</script>