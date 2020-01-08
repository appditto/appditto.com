<template>
  <section class="py-4 py-md-5" id="fast-and-efficient">
    <b-row align-v="center" align-h="around">
      <b-col cols="12" md="6" class="px-md-4 px-lg-5" order="2" order-md="1">
        <h2 class="text-center text-md-left w800 mt-2 mt-md-0">
          <span class="text-primary">Fast</span> and
          <span class="text-primary">efficient</span>.
        </h2>
        <h5 class="w400 mt-3">
          Since we don’t have to deal with the problems of both iOS and Android
          seperately, we can work much faster and more efficiently. So, we bring
          more value while costing less.
        </h5>
      </b-col>
      <b-col cols="11" md="5" class="mt-4 mt-md-0" order="1" order-md="2">
        <div class="w-100 position-relative">
          <img
            src="~/assets/images/fast-and-efficient/fast-and-efficient-layer-0.svg"
            alt="Fast And Efficient Layer 0"
            class="w-100"
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
      </b-col>
    </b-row>
  </section>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'FastAndEfficientSection'
})
</script>

<style>
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