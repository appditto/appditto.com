<template>
  <a :href="'https://' + url" target="_blank" rel="noopener" class="grow-1">
    <img
      :src="
        require('~/assets/images/social-icons/' +
          name.toLowerCase() +
          '-icon.svg')
      "
      :alt="name"
      class="w-12 h-12 m-4"
    />
  </a>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'SocialButton',
  props: {
    name: null,
    url: null
  }
})
</script>