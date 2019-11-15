<template>
  <a :href="'https://' + url" target="_blank" class="grow-1">
    <img
      :src="
        require('~/static/images/social-icons/' +
          name.toLowerCase() +
          '-icon.svg')
      "
      :alt="name"
      class="social-icon m-3"
    />
  </a>
</template>
<script>
import Vue from 'vue'
import SocialButton from '~/components/SocialButton.vue'
export default Vue.extend({
  name: 'Footer',
  components: {
    SocialButton
  },
  props: {
    name: null,
    url: null
  }
})
</script>