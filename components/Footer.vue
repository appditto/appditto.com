<template>
  <b-container fluid class="bg-primary pt-4 pb-1 mt-5">
    <b-row align-h="center">
      <SocialButton name="Twitter" url="twitter.com/appditto" />
      <SocialButton name="Medium" url="medium.com/@appditto" />
      <SocialButton name="GitHub" url="github.com/appditto" />
      <b-col cols="12" class="d-block d-md-none"></b-col>
      <SocialButton name="Reddit" url="reddit.com/u/appditto" />
      <SocialButton name="Instagram" url="instagram.com/appditto" />
      <SocialButton name="Dribbble" url="dribbble.com/appditto" />
    </b-row>
    <b-row align-h="center" class="mt-4">
      <p class="text-center text-white w700">© 2020, Appditto LLC.</p>
    </b-row>
  </b-container>
</template>
<script>
import Vue from 'vue'
import SocialButton from '~/components/SocialButton.vue'
export default Vue.extend({
  name: 'Footer',
  components: {
    SocialButton
  }
})
</script>