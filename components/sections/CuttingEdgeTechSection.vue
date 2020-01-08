<template>
  <section class="py-4 py-md-5" id="cutting-edge-tech">
    <b-row align-v="center" align-h="around">
      <b-col cols="11" md="5" class="mt-4 mt-md-0 px-0">
        <div class="w-100 position-relative">
          <img
            src="~/assets/images/cutting-edge/cutting-edge-layer-0.svg"
            alt="Cutting Edge Layer 0"
            class="w-100"
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
      </b-col>
      <b-col cols="12" md="6" class="px-md-4 px-lg-5">
        <h2 class="text-center text-md-left w800 mt-2 mt-md-0">
          Always
          <span class="text-primary">up to date</span> with
          <span class="text-primary">cutting-edge</span> tech.
        </h2>
        <h5 class="w400 mt-3">
          We’re following upcoming trends in software development very closely,
          to get you ahead of the competition. That’s why we are currently using
          Google’s cross-platform application development framework, Flutter.
        </h5>
      </b-col>
    </b-row>
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