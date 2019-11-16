<template>
  <TransitionExpand>
    <div v-if="expanded">
      <b-row align-h="center">
        <form
          action="https://getform.io/f/98bf4ab2-6ad6-456e-b321-a00f4f018c3d"
          method="POST"
        >
          <b-col
            cols="12"
            lg="8"
            class="bg-white mx-auto mt-4 px-4 px-md-5 py-4 rounded-2 form-card"
          >
            <b-row>
              <b-col cols="12" md="6" class="mt-3">
                <h5 class="text-primary w800 mx-2">Name</h5>
                <div class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required="required"
                  />
                </div>
              </b-col>
              <b-col cols="12" md="6" class="mt-3">
                <h5 class="text-primary w800 mx-2">Email</h5>
                <div class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    name="email"
                    placeholder="Your email address"
                    required="required"
                  />
                </div>
              </b-col>
              <b-col cols="12" class="mt-3">
                <h5 class="text-primary w800 mx-2">
                  Message
                </h5>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    type="text"
                    name="message"
                    placeholder="Your message"
                    required="required"
                  ></textarea>
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
                  >
                    Send
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
export default Vue.extend({
  name: 'MyForm',
  components: {
    TransitionExpand
  },
  props: {
    expanded: false
  }
})
</script>