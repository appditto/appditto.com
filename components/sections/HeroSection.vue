<template>
  <section class="py-4 py-md-0" id="landing">
    <b-row align-v="center" align-h="center">
      <b-col cols="12" md="6">
        <h1 class="text-center text-md-left w800 mt-3">
          We build <span class="text-primary">beautiful apps</span>,<br
            class="d-none d-xl-block"
          />
          in <span class="text-primary">record time</span>.
        </h1>
        <b-row class="px-3 justify-content-center justify-content-md-start">
          <b-btn
            href="mailto:hello@appditto.com"
            variant="primary"
            size="lg"
            rounded
            class="w800 px-5 mt-2 grow-2 btn-shdw-primary"
            >Let's Talk</b-btn
          >
        </b-row>
      </b-col>
      <b-col cols="12" md="5" class="mt-4 mt-md-0">
        <img src="~/assets/images/hero-phones.png" alt="Hero" class="w-100" />
      </b-col>
    </b-row>
  </section>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'HeroSection'
})
</script>