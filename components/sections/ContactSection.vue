<template>
  <section class="pt-2 pb-5 mt-4" id="contact">
    <b-row align-h="center">
      <b-col cols="12">
        <b-row align-h="center">
          <b-col cols="12" md="5">
            <img src="~/assets/images/chat.svg" alt="Chat" class="w-100" />
          </b-col>
        </b-row>
        <h2 class="w800 text-center">Want to have a chat?</h2>
        <h5
          class="w400 text-center col-12 col-md-8 col-lg-5 px-0 mx-auto"
        >Send an email or fill the form and we'll get back to you as soon as we can.</h5>
        <b-row align-h="center">
          <b-col cols="12" md="4" lg="3" v-if="!expanded">
            <b-btn
              href="mailto:hello@appditto.com"
              variant="primary"
              size="lg"
              rounded
              class="w700 mt-3 grow-2 btn-shdw-primary w-100"
            >Send an Email</b-btn>
          </b-col>
          <b-col cols="12" md="4" lg="3">
            <b-btn
              :variant="expanded ? 'outline-primary' : 'primary'"
              size="lg"
              rounded
              @click="expanded = !expanded"
              class="mt-3 grow-2 btn-shdw-primary w-100"
              v-bind:class="expanded?'border-2 w800':'w700'"
            >{{ expanded ? 'Close' : 'Contact Form' }}</b-btn>
          </b-col>
        </b-row>
        <!-- FORM -->
        <MyForm :expanded="expanded" />
      </b-col>
    </b-row>
  </section>
</template>
<script>
import Vue from 'vue'
import MyForm from '~/components/MyForm.vue'
export default Vue.extend({
  name: 'ContactSection',
  components: {
    MyForm
  },
  data() {
    return {
      expanded: false
    }
  }
})
</script>