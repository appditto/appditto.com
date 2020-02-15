<template>
  <section id="single-codebase">
    <div
      class="flex flex-row flex-wrap justify-center md:justify-between items-center py-4 md:py-12"
    >
      <div class="flex flex-col w-11/12 md:w-5/12 lg:w-1/3">
        <div class="w-full relative">
          <img
            src="~/assets/images/single-codebase/single-codebase-layer-0.svg"
            alt="Single Codebase Layer 0"
            class="w-full"
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
      </div>
      <div class="flex flex-col w-full md:w-7/12 md:px-8 lg:px-12">
        <h2 class="text-3xl leading-tight text-center md:text-left font-extrabold mt-3 md:mt-0">
          Less maintenance,
          <br />more
          <span class="text-primary">uptime</span>.
        </h2>
        <h5 class="font-normal mt-3 text-xl">
          The apps we build run natively both on iOS and Android, and they are
          built from a single code base. That means less maintenance and downtime. So, you can focus on making your product or service better instead.
        </h5>
      </div>
    </div>
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