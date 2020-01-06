<template>
  <section class="py-4 py-md-5" id="fast-and-efficient">
    <b-row align-v="center" align-h="around">
      <b-col cols="12" md="6" class="px-md-4 px-lg-5" order="2" order-md="1">
        <h2 class="text-center text-md-left w800 mt-2 mt-md-0">
          <span class="text-primary">Fast</span> and
          <span class="text-primary">efficient</span>.
        </h2>
        <h5 class="w400 mt-3">
          Since we don’t have to deal with the problems of both iOS and Android
          seperately, we can work much faster and more efficiently. So, we bring
          more value while costing less.
        </h5>
      </b-col>
      <b-col cols="11" md="5" class="mt-4 mt-md-0" order="1" order-md="2">
        <img src="~/assets/images/fast-efficient.svg" alt="Fast and efficient" class="w-100" />
      </b-col>
    </b-row>
  </section>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'FastAndEfficientSection'
})
</script>