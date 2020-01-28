<template>
  <TransitionExpand>
    <div v-if="expanded">
      <div class="flex flex-row flex-wrap justify-center">
        <form @submit="submitForm" class="w-full">
          <div class="w-full md:w-11/12 lg:w-2/3 mx-auto mt-4 px-6 md:px-8 pt-6 pb-8" id="formCard">
            <!-- Success State -->
            <div class="flex flex-row flex-wrap justify-center" v-if="formSuccess && !formFail">
              <div class="w-full">
                <h4
                  class="text-2xl leading-snug text-light font-bold mx-2 text-center"
                  :class="{ 'text-danger': hasNameError }"
                >
                  Thanks for reaching out!
                  <br class="hidden lg:block" />We'll get back to you soon.
                </h4>
              </div>
              <div class="w-full">
                <img
                  src="~assets/images/misc-icons/tick.svg"
                  alt="Tick"
                  class="mt-4 w-24 h-24 mx-auto"
                />
              </div>
              <div class="w-full lg:w-2/3">
                <button
                  @click="turnFormToIdle"
                  class="text-xl text-success bg-light font-bold px-4 py-2 mt-6 grow-2 btn-shdw-dark w-full rounded"
                >Send Another Message</button>
              </div>
            </div>
            <!-- Error State-->
            <div class="flex flex-row flex-wrap justify-center" v-if="!formSuccess && formFail">
              <div class="w-full">
                <h5
                  class="text-2xl leading-snug text-light font-bold mx-2 text-center"
                  :class="{ 'text-danger': hasNameError }"
                >Something went wrong. Please try again.</h5>
              </div>
              <div class="w-full">
                <img
                  src="~assets/images/misc-icons/error.svg"
                  alt="Error"
                  class="mt-4 w-24 h-24 mx-auto"
                />
              </div>
              <div class="w-full lg:w-1/2">
                <button
                  @click="turnFormToIdle"
                  class="text-xl text-danger bg-light font-bold px-4 py-2 mt-6 grow-2 btn-shdw-dark w-full rounded"
                >Try Again</button>
              </div>
            </div>
            <!-- Idle State-->
            <div class="flex flex-row flex-wrap justify-center" v-if="!formSuccess && !formFail">
              <div class="flex flex-col w-full md:w-1/2 mt-3 md:px-4">
                <h5
                  class="text-xl text-primary font-bold mx-2"
                  :class="{ 'text-danger': hasNameError }"
                >Name</h5>
                <div class="form-group">
                  <input
                    class="form-control py-1 px-3 mt-2 w-full rounded"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required="required"
                    @blur="nameUnfocus"
                    @input="nameChange"
                    v-model="name"
                  />
                  <small
                    class="text-danger px-2"
                    :style="{ visibility: hasNameError ? 'visible' : 'hidden' }"
                  >Name is required</small>
                </div>
              </div>
              <div class="flex flex-col w-full md:w-1/2 mt-3 md:px-4">
                <h5
                  class="text-xl text-primary font-bold mx-2"
                  :class="{ 'text-danger': hasEmailError }"
                >Email</h5>
                <div class="form-group">
                  <input
                    class="form-control py-1 px-3 mt-2 w-full rounded"
                    type="text"
                    name="email"
                    placeholder="Your email address"
                    required="required"
                    @blur="emailUnfocus"
                    v-model="email"
                  />
                  <small
                    class="text-danger px-2"
                    :style="{
                      visibility: hasEmailError ? 'visible' : 'hidden'
                    }"
                  >Invalid email</small>
                </div>
              </div>
              <div class="flex flex-col w-full mt-3 md:px-4">
                <h5
                  class="text-xl text-primary font-bold mx-2"
                  :class="{ 'text-danger': hasMessageError }"
                >Message</h5>
                <div class="form-group">
                  <textarea
                    class="form-control py-2 px-3 mt-2 w-full"
                    type="text"
                    name="message"
                    placeholder="Your message"
                    required="required"
                    @blur="messageUnfocus"
                    v-model="messageContent"
                  ></textarea>
                  <small
                    class="text-danger px-2"
                    :style="{
                      visibility: hasMessageError ? 'visible' : 'hidden'
                    }"
                  >Message must be at least 50 characters</small>
                </div>
              </div>
              <div class="flex flex-row w-full lg:w-5/12 mt-4">
                <button
                  class="text-xl bg-gradient-blue text-light font-bold grow-2 btn-shdw-primary px-4 py-2 w-full rounded"
                  type="submit"
                  :disabled="requestIsLoading"
                >
                  <span v-if="!requestIsLoading">Send</span>
                  <LoadingAnimation v-if="requestIsLoading" />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </TransitionExpand>
</template>
<script>
import Vue from 'vue'
import TransitionExpand from '~/components/TransitionExpand.vue'
import LoadingAnimation from '~/components/LoadingAnimation.vue'
import Axios from 'axios'
export default Vue.extend({
  name: 'MyForm',
  data() {
    return {
      hasNameError: false,
      hasEmailError: false,
      hasMessageError: false,
      name: '',
      email: '',
      messageContent: '',
      requestIsLoading: false,
      formSuccess: false,
      formFail: false
    }
  },
  components: {
    TransitionExpand,
    LoadingAnimation
  },
  props: {
    expanded: false
  },
  watch: {
    expanded: {
      immediate: true,
      handler(val, oldVal) {
        if (val == false && oldVal == true) {
          this.turnFormToIdle()
        }
      }
    }
  },
  methods: {
    nameUnfocus() {
      if (this.name.length == 0) {
        this.hasNameError = true
      } else {
        this.hasNameError = false
      }
    },
    nameChange() {
      if (this.name.length > 0) {
        this.hasNameError = false
      }
    },
    emailUnfocus() {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.hasEmailError = false
      } else {
        this.hasEmailError = true
      }
    },
    messageUnfocus() {
      if (this.messageContent.length < 50) {
        this.hasMessageError = true
      } else {
        this.hasMessageError = false
      }
    },
    turnFormToSuccess() {
      var formCard = document.getElementById('formCard')
      var tick = document.getElementById('tick')
      this.formSuccess = true
      this.formFail = false
      formCard.style.transform = 'scale(0.9)'
      formCard.style.borderColor = '#00998C'
      formCard.style.backgroundColor = '#00998C'
    },
    turnFormToIdle() {
      var formCard = document.getElementById('formCard')
      this.formSuccess = false
      this.formFail = false
      formCard.style.transform = 'scale(1)'
      formCard.style.borderColor = '#515EFF'
      formCard.style.backgroundColor = '#ffffff'
    },
    turnFormToFail() {
      var formCard = document.getElementById('formCard')
      this.formFail = true
      this.formSuccess = false
      formCard.style.transform = 'scale(0.9)'
      formCard.style.borderColor = '#FF6351'
      formCard.style.backgroundColor = '#FF6351'
    },
    submitForm(e) {
      e.preventDefault()
      if (
        this.hasMessageError ||
        this.hasNameError ||
        this.hasEmailError ||
        this.requestIsLoading
      ) {
        return
      }
      this.requestIsLoading = true
      let ref = this
      Axios.post('https://appditto.com/inquire', {
        content: this.messageContent,
        sender: this.email,
        sender_name: this.name
      })
        .then(function(response) {
          ref.turnFormToSuccess()
        })
        .catch(function(error) {
          console.log('error ' + error.toString())
          ref.turnFormToFail()
        })
        .finally(function() {
          ref.requestIsLoading = false
        })
    }
  }
})
</script>