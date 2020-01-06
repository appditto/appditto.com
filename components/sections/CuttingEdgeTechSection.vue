<template>
  <section class="py-4 py-md-5" id="cutting-edge-tech">
    <b-row align-v="center" align-h="around">
      <b-col cols="11" md="5" class="mt-4 mt-md-0">
        <img src="~/assets/images/cutting-edge.svg" alt="Cutting-edge" class="w-100" />
      </b-col>
      <b-col cols="12" md="6" class="px-md-4 px-lg-5">
        <h2 class="text-center text-md-left w800 mt-2 mt-md-0">
          Always
          <span class="text-primary">up to date</span> with
          <span class="text-primary">cutting-edge</span> tech.
        </h2>
        <h5 class="w400 mt-3">
          We’re following upcoming trends in software development very closely,
          to get you ahead of the competition. That’s why we are currently using
          Google’s cross-platform application development framework, Flutter.
        </h5>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'CuttingEdgeTechSection'
})
</script>