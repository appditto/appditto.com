<template>
  <TransitionExpand>
    <div v-if="expanded">
      <b-row align-h="center" class="px-1">
        <form @submit="submitForm">
          <b-col
            cols="12"
            md="9"
            lg="8"
            class="mx-auto mt-4 px-4 px-md-5 py-4 rounded-2"
            id="formCard"
          >
            <b-row align-h="center" v-if="formSuccess">
              <b-col cols="12"
                ><h4
                  class="text-light w800 mx-2 text-center"
                  :class="{ 'text-danger': hasNameError }"
                >
                  Thanks for reaching out! We'll get back to you soon.
                </h4></b-col
              >
              <b-col cols="12" class="d-flex justify-content-center"
                ><img src="~assets/images/tick.svg" alt="Tick" class="mt-2 tick"
              /></b-col>
            </b-row>
            <b-row v-if="!formSuccess">
              <b-col cols="12" md="6" class="mt-3">
                <h5
                  class="text-primary w800 mx-2"
                  :class="{ 'text-danger': hasNameError }"
                >
                  Name
                </h5>
                <div class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required="required"
                    @blur="nameUnfocus"
                    @input="nameChange"
                    v-model="name"
                  />
                  <small
                    class="text-danger"
                    :style="{ visibility: hasNameError ? 'visible' : 'hidden' }"
                  >
                    Name is required
                  </small>
                </div>
              </b-col>
              <b-col cols="12" md="6" class="mt-3">
                <h5
                  class="text-primary w800 mx-2"
                  :class="{ 'text-danger': hasEmailError }"
                >
                  Email
                </h5>
                <div class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    name="email"
                    placeholder="Your email address"
                    required="required"
                    @blur="emailUnfocus"
                    v-model="email"
                  />
                  <small
                    class="text-danger"
                    :style="{
                      visibility: hasEmailError ? 'visible' : 'hidden'
                    }"
                  >
                    Invalid email
                  </small>
                </div>
              </b-col>
              <b-col cols="12" class="mt-2">
                <h5
                  class="text-primary w800 mx-2"
                  :class="{ 'text-danger': hasMessageError }"
                >
                  Message
                </h5>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    type="text"
                    name="message"
                    placeholder="Your message"
                    required="required"
                    @blur="messageUnfocus"
                    v-model="messageContent"
                  ></textarea>
                  <small
                    class="text-danger"
                    :style="{
                      visibility: hasMessageError ? 'visible' : 'hidden'
                    }"
                  >
                    Message must be at least 50 characters
                  </small>
                </div>
              </b-col>
              <b-col cols="12">
                <b-row align-h="center">
                  <b-col cols="12" lg="6">
                    <b-btn
                      variant="primary"
                      size="lg"
                      rounded
                      class="w800 px-5 mt-2 grow-2 btn-shdw-primary w-100"
                      type="submit"
                      :disabled="requestIsLoading"
                    >
                      <span v-if="!requestIsLoading">Send</span>
                      <img
                        src="~assets/images/loading-dots.gif"
                        alt="Loading"
                        id="loading-gif"
                        v-if="requestIsLoading"
                      />
                    </b-btn>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </form>
      </b-row>
    </div>
  </TransitionExpand>
</template>
<script>
import Vue from 'vue'
import TransitionExpand from '~/components/TransitionExpand.vue'
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
      formSuccess: false
    }
  },
  components: {
    TransitionExpand
  },
  props: {
    expanded: false
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
      formCard.style.transform = 'scale(0.9)'
      formCard.style.borderColor = '#2EE093'
      formCard.style.backgroundColor = '#2EE093'
    },
    turnFormToIdle() {
      var formCard = document.getElementById('formCard')
      this.formSuccess = false
      formCard.style.transform = 'scale(1)'
      formCard.style.borderColor = '#4082ff'
      formCard.style.backgroundColor = '#ffffff'
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
          this.turnFormToSuccess()
        })
        .catch(function(error) {
          alert('error ' + error.toString())
        })
        .finally(function() {
          ref.requestIsLoading = false
        })
    }
  }
})
</script>