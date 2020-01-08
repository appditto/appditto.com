<template>
  <section class="py-4 py-md-5" id="single-codebase">
    <b-row align-v="center" align-h="around">
      <b-col cols="11" md="5" lg="4" class="mt-4 mt-md-0 px-0 pl-md-4">
        <div class="w-100 position-relative">
          <img
            src="~/assets/images/single-codebase/single-codebase-layer-0.svg"
            alt="Single Codebase Layer 0"
            class="w-100"
          />
          <img
            src="~/assets/images/single-codebase/single-codebase-layer-1.svg"
            alt="Single Codebase Layer 1"
            class="single-codebase single-codebase-layer-1"
          />
          <img
            src="~/assets/images/single-codebase/single-codebase-layer-2.svg"
            alt="Single Codebase Layer 2"
            class="single-codebase single-codebase-layer-2"
          />
          <img
            src="~/assets/images/single-codebase/single-codebase-layer-3.svg"
            alt="Single Codebase Layer 3"
            class="single-codebase single-codebase-layer-3"
          />
          <img
            src="~/assets/images/single-codebase/single-codebase-layer-4.svg"
            alt="Single Codebase Layer 4"
            class="single-codebase single-codebase-layer-4"
          />
        </div>
      </b-col>
      <b-col cols="12" md="7" class="px-md-4 px-lg-5">
        <div class="pl-md-4">
          <h2 class="text-center text-md-left w800 mt-2 mt-md-0">
            Less maintenance,
            <br />more
            <span class="text-primary">uptime</span>.
          </h2>
          <h5 class="w400 mt-3">
            The apps we build run natively both on iOS and Android, and they are
            built from a single code base. That means less maintenance and downtime. So, you can focus on making your product or service better instead.
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

<style scoped>
.single-codebase {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.single-codebase-layer-1 {
  opacity: 1;
  animation-name: scOpacityAnimation;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
.single-codebase-layer-2 {
  transform: rotateZ(-4deg);
  animation-name: scRotateAnimation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
.single-codebase-layer-3 {
  transform: scale(1.02);
  opacity: 1;
  animation-name: scScaleAndOpacityAnimation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform-origin: left bottom;
  animation-delay: 1s;
}
.single-codebase-layer-4 {
  transform: scale(1.02);
  opacity: 1;
  animation-name: scScaleAndOpacityAnimation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform-origin: right bottom;
}
@keyframes scRotateAnimation {
  0% {
    transform: rotateZ(-4deg);
  }
  50% {
    transform: rotateZ(4deg);
  }
  100% {
    transform: rotateZ(-4deg);
  }
}
@keyframes scScaleAndOpacityAnimation {
  0% {
    transform: scale(1.02);
    opacity: 1;
  }
  50% {
    transform: scale(0.94);
    opacity: 0.75;
  }
  100% {
    transform: scale(1.02);
    opacity: 1;
  }
}
@keyframes scOpacityAnimation {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
}
</style>