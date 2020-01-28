<template>
  <section id="cutting-edge-tech">
    <div
      class="flex flex-row flex-wrap justify-center md:justify-between items-center py-4 md:py-12"
    >
      <div class="flex flex-col w-11/12 md:w-5/12 mt-4 md:mt-0">
        <div class="w-full relative">
          <img
            src="~/assets/images/cutting-edge/cutting-edge-layer-0.svg"
            alt="Cutting Edge Layer 0"
            class="w-full"
          />
          <img
            src="~/assets/images/cutting-edge/cutting-edge-layer-1.svg"
            alt="Cutting Edge Layer 1"
            class="cutting-edge cutting-edge-layer-1"
          />
          <img
            src="~/assets/images/cutting-edge/cutting-edge-layer-2.svg"
            alt="Cutting Edge Layer 2"
            class="cutting-edge cutting-edge-layer-2"
          />
          <img
            src="~/assets/images/cutting-edge/cutting-edge-layer-3.svg"
            alt="Cutting Edge Layer 3"
            class="cutting-edge cutting-edge-layer-3"
          />
          <img
            src="~/assets/images/cutting-edge/cutting-edge-layer-4.svg"
            alt="Cutting Edge Layer 4"
            class="cutting-edge cutting-edge-layer-4"
          />
          <img
            src="~/assets/images/cutting-edge/cutting-edge-layer-5.svg"
            alt="Cutting Edge Layer 5"
            class="cutting-edge cutting-edge-layer-5"
          />
        </div>
      </div>
      <div class="flex flex-col w-full md:w-1/2 px-md-4 lg:px-5">
        <h2 class="text-3xl leading-tight text-center font-extrabold md:text-left mt-2 md:mt-0">
          Always
          <span class="text-primary">up to date</span>
          <br class="hidden lg:block" />with
          <span class="text-primary">cutting-edge</span> tech.
        </h2>
        <h5 class="text-xl font-normal mt-3">
          We’re following upcoming trends in software development very closely,
          to get you ahead of the competition. That’s why we are currently using
          Google’s cross-platform application development framework, Flutter.
        </h5>
      </div>
    </div>
  </section>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'CuttingEdgeTechSection'
})
</script>

<style scoped>
.cutting-edge {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.cutting-edge-layer-1 {
  opacity: 1;
  animation-name: ceOpacityAnimation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform-origin: center;
  transform: scale(1) rotateZ(0deg);
}
.cutting-edge-layer-2 {
  opacity: 1;
  animation-name: ceOpacityAnimation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform-origin: center;
  animation-delay: 0.5s;
  transform: scale(1);
}
.cutting-edge-layer-3 {
  opacity: 1;
  animation-name: ceOpacityAnimation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform-origin: center;
  animation-delay: 1s;
  transform: scale(1);
}
.cutting-edge-layer-4 {
  opacity: 1;
  animation-name: ceOpacityAnimation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform-origin: center;
  animation-delay: 1.5s;
  transform: scale(1);
}
.cutting-edge-layer-5 {
  opacity: 1;
  animation-name: ceOpacityAnimation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform-origin: center;
  animation-delay: 1s;
  transform: scale(1);
}
@keyframes ceOpacityAnimation {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.75;
    transform: scale(0.96);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>