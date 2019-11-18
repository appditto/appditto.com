<template>
  <section class="py-4 py-md-5" id="single-codebase">
    <b-row align-v="center" align-h="around">
      <b-col cols="11" md="4" class="mt-4 mt-md-0">
        <img
          src="~/assets/images/single-codebase.svg"
          alt="Single codebase"
          class="w-100"
        />
      </b-col>
      <b-col cols="12" md="7" class="px-md-5">
        <div class="pl-md-5">
          <h2 class="text-center text-md-left w800 mt-2 mt-md-0">
            Less maintenance,<br />more
            <span class="text-primary">uptime</span>.
          </h2>
          <h5 class="w400 mt-3">
            The apps we build run natively both on iOS and Android, and they are
            built from a single code base. That means less maintenance, better
            and more continuous user engagement.
          </h5>
        </div>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'SingleCodeBaseSection'
})
</script>