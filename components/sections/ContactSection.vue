<template>
  <section class="pt-2 pb-5 mt-4" id="contact">
    <b-row align-h="center">
      <b-col cols="12">
        <b-row align-h="center">
          <b-col cols="12" md="5">
            <div class="w-100 position-relative">
              <img src="~/assets/images/chat/chat-layer-0.svg" alt="Chat Layer 0" class="w-100" />
              <img
                src="~/assets/images/chat/chat-layer-1.svg"
                alt="Chat Layer 1"
                class="chat chat-layer-1"
              />
              <img
                src="~/assets/images/chat/chat-layer-2.svg"
                alt="Chat Layer 2"
                class="chat chat-layer-2"
              />
            </div>
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

<style scoped>
.chat {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.chat-layer-1 {
  transform: translateY(-0.3rem) scale(1);
  animation-name: chatAnimation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform-origin: left bottom;
}
.chat-layer-2 {
  transform: translateY(-0.3rem) scale(1);
  animation-name: chatAnimation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform-origin: right bottom;
  animation-delay: 1s;
}
@keyframes chatAnimation {
  0% {
    transform: translateY(-0.3rem) scale(1);
  }
  50% {
    transform: translateY(0.3rem) scale(0.98);
  }
  100% {
    transform: translateY(-0.3rem) scale(1);
  }
}
</style>