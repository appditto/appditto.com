<template>
  <div
    class="w-full py-6"
    v-bind:class="{'bg-gradient-blue': hasBackground, 'mt-12': hasTopMargin}"
  >
    <div class="flex flex-row flex-wrap justify-center">
      <SocialButton name="Twitter" url="twitter.com/appditto" />
      <SocialButton name="Medium" url="medium.com/@appditto" />
      <SocialButton name="GitHub" url="github.com/appditto" />
      <div class="w-full md:hidden"></div>
      <SocialButton name="Reddit" url="reddit.com/u/appditto" />
      <SocialButton name="Instagram" url="instagram.com/appditto" />
      <SocialButton name="Dribbble" url="dribbble.com/appditto" />
    </div>
    <div class="flex flex-row flex-wrap justify-center mt-6">
      <p class="text-normal text-center text-light font-bold">© 2020, Appditto LLC.</p>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import SocialButton from '~/components/SocialButton.vue'
export default Vue.extend({
  name: 'Footer',
  props: {
    hasBackground: true,
    hasTopMargin: true
  },
  components: {
    SocialButton
  }
})
</script>