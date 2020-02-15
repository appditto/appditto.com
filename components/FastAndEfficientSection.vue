<template>
  <section id="fast-and-efficient">
    <div
      class="flex flex-row flex-wrap justify-center md:justify-between items-center py-4 md:py-12"
    >
      <div class="w-11/12 md:w-5/12 mt-4 mt-md-0 md:order-2">
        <div class="w-full relative">
          <img
            src="~/assets/images/fast-and-efficient/fast-and-efficient-layer-0.svg"
            alt="Fast And Efficient Layer 0"
            class="w-full"
          />
          <img
            src="~/assets/images/fast-and-efficient/fast-and-efficient-layer-1.svg"
            alt="Fast And Efficient Layer 1"
            class="fast-and-efficient fast-and-efficient-layer-1"
          />
          <img
            src="~/assets/images/fast-and-efficient/fast-and-efficient-layer-2.svg"
            alt="Fast And Efficient Layer 2"
            class="fast-and-efficient fast-and-efficient-layer-2"
          />
        </div>
      </div>
      <div class="w-full md:w-1/2 md:px-4 lg:px-8 md:order-1">
        <h2 class="text-3xl leading-tight text-center md:text-left font-extrabold mt-2 mt-md-0">
          <span class="text-primary">Fast</span> and
          <span class="text-primary">efficient</span>.
        </h2>
        <h5 class="text-xl font-normal mt-3">
          Since we don’t have to deal with the problems of both iOS and Android
          seperately, we can work much faster and more efficiently. So, we bring
          more value while costing less.
        </h5>
      </div>
    </div>
  </section>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'FastAndEfficientSection'
})
</script>

<style scoped>
.fast-and-efficient {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.fast-and-efficient-layer-1 {
  transform: translateY(-0.5rem);
  animation-name: feScaleAndMoveAnimation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform-origin: left center;
}
.fast-and-efficient-layer-2 {
  transform: translateY(-0.5rem);
  animation-name: feScaleAndMoveAnimation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform-origin: right center;
  animation-delay: 1s;
}
@keyframes feScaleAndMoveAnimation {
  0% {
    transform: translateY(-0.5rem);
  }
  50% {
    transform: translateY(0.5rem);
  }
  100% {
    transform: translateY(-0.5rem);
  }
}
</style>