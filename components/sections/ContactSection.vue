<template>
  <section id="contact">
    <div class="flex flex-col w-full pb-16 md:pb-24">
      <div class="w-full md:w-1/2 lg:w-5/12 mx-auto">
        <div class="w-full relative">
          <img class="w-full" src="~/assets/images/chat/chat-layer-0.svg" alt="Chat Layer 0" />
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
      </div>
      <h2 class="text-3xl font-extrabold text-center">Want to have a chat?</h2>
      <h5
        class="text-xl font-normal text-center w-full md:w-2/3 lg:w-5/12 mx-auto"
      >Send an email or fill the form and we'll get back to you as soon as we can.</h5>
      <div class="flex flex-row flex-wrap justify-center">
        <div class="w-full md:w-1/3 lg:w-1/4 mx-3" v-if="!expanded">
          <a href="mailto:hello@appditto.com">
            <button
              class="text-xl font-bold bg-gradient-blue text-light mt-6 grow-2 btn-shdw-primary w-full px-4 py-2 rounded"
            >Send an Email</button>
          </a>
        </div>
        <div class="w-full md:w-1/3 lg:w-1/4 mx-3">
          <button
            @click="expanded = !expanded"
            class="text-xl font-bold mt-6 grow-2 btn-shdw-primary w-full px-4 py-2 rounded"
            v-bind:class="expanded?'text-primary border-2 border-primary':'text-light bg-gradient-blue'"
          >{{ expanded ? 'Close' : 'Contact Form' }}</button>
        </div>
      </div>
      <!-- FORM -->
      <MyForm :expanded="expanded" />
    </div>
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