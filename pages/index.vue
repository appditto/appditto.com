<template>
  <div>
    <!-- Navbar -->
    <b-container fluid class="my-container">
      <Navbar />
      <!-- Hero -->
      <section class="py-4">
        <b-row align-v="center" align-h="center">
          <b-col cols="12" md="6">
            <h1 class="text-center text-md-left w800">
              We build <span class="text-primary">beautiful apps</span>,<br />in
              <span class="text-primary">record time</span>.
            </h1>
            <b-row class="px-3 justify-content-center justify-content-md-start">
              <b-btn variant="primary" size="lg" rounded class="w800 px-5 mt-2"
                >Let's Talk</b-btn
              >
            </b-row>
          </b-col>
          <b-col cols="12" md="6" class="mt-4 mt-md-0">
            <img
              src="~/static/images/hero-phones.png"
              alt="Hero"
              class="w-100"
            />
          </b-col>
        </b-row>
      </section>
      <!-- Single codebase -->
      <section class="py-5">
        <b-row align-v="center" align-h="between">
          <b-col cols="12" md="5" class="mt-4 mt-md-0">
            <img
              src="~/static/images/single-codebase.svg"
              alt="Single codebase"
              class="w-100"
            />
          </b-col>
          <b-col cols="12" md="6" class="px-md-5">
            <h2 class="text-center text-md-left w800">
              Less maintenance,<br />more
              <span class="text-primary">uptime</span>.
            </h2>
            <h5 class="w400">
              The apps we build run natively both on iOS and Android, and they
              are built from a single code base. That means less maintenance,
              better and more continuous user engagement.
            </h5>
          </b-col>
        </b-row>
      </section>
      <!-- Fast and efficient -->
      <section class="py-5">
        <b-row align-v="center" align-h="between">
          <b-col cols="12" md="6" class="px-md-5">
            <h2 class="text-center text-md-left w800">
              <span class="text-primary">Fast</span> and
              <span class="text-primary">efficient</span>.
            </h2>
            <h5 class="w400">
              Since we don’t have to deal with the problems of both iOS and
              Android seperately, we can work much faster and more efficiently.
              So, we bring more value while costing less.
            </h5>
          </b-col>
          <b-col cols="12" md="5" class="mt-4 mt-md-0">
            <img
              src="~/static/images/fast-efficient.svg"
              alt="Fast and efficient"
              class="w-100"
            />
          </b-col>
        </b-row>
      </section>
      <!-- Cutting edge -->
      <section class="py-5">
        <b-row align-v="center" align-h="between">
          <b-col cols="12" md="5" class="mt-4 mt-md-0">
            <img
              src="~/static/images/cutting-edge.svg"
              alt="Cutting-edge"
              class="w-100"
            />
          </b-col>
          <b-col cols="12" md="6" class="px-md-5">
            <h2 class="text-center text-md-left w800">
              Always <span class="text-primary">up to date</span> with
              <span class="text-primary">cutting-edge</span> tech.
            </h2>
            <h5 class="w400">
              We’re following upcoming trends in software development very
              closely, to get you ahead of the competition. That’s why we are
              currently using Google’s cross-platform application development
              framework, Flutter.
            </h5>
          </b-col>
        </b-row>
      </section>
    </b-container>
    <!-- Apps -->
    <section class="py-5 mb-5">
      <b-container fluid class="my-container">
        <h2 class="w800 text-center">Check Out Our Apps</h2>
        <b-row align-v="center" align-h="center" class="mt-0 mt-md-5">
          <AppCard appName="Natrium" rating="4.9" />
          <AppCard appName="Blaise" rating="4.8" />
          <AppCard appName="Kalium" rating="4.5" />
        </b-row>
      </b-container>
      <img
        src="~/static/images/testimonials.png"
        alt="Testimonials"
        class="w-100 mt-4"
      />
    </section>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import AppCard from '~/components/AppCard.vue'
export default {
  components: {
    Navbar,
    AppCard
  }
}
</script>

