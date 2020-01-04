<template>
  <section class="bg-hero pt-5 position-relative" id="landing">
    <b-container fluid class="my-container-big pt-5 pt-md-4 px-md-5 position-relative">
      <div class="circle-app-icon"></div>
      <div class="waterdrop-app-icon d-none d-md-block"></div>
      <div class="waterdrop-app-icon-small d-md-none"></div>
      <div class="square-app-icon d-none d-lg-block"></div>
      <b-row align-v="center" align-h="center" class="pl-md-1">
        <b-col cols="12" md="6" class="pb-lg-5 mb-md-4 mb-lg-5 pl-lg-4">
          <h1 class="text-center text-md-left w700 mt-3 text-light">
            We build beautiful apps,
            <br class="d-none d-xl-block" />in record time.
          </h1>
          <b-row class="px-3 justify-content-center justify-content-md-start">
            <b-btn
              href="mailto:hello@appditto.com"
              variant="light"
              size="lg"
              rounded
              class="w800 text-primary px-5 mt-2 grow-2 btn-shdw-dark"
            >Let's Talk</b-btn>
          </b-row>
        </b-col>
        <b-col cols="12" md="6" class="mt-4 mt-md-0 position-relative">
          <img src="~/assets/images/hero-phones-bg.svg" alt="Hero Phones Background" class="w-100" />
          <img
            src="~/assets/images/hero-galaxy-shadow.svg"
            alt="Galaxy Shadow"
            class="galaxy-shadow"
          />
          <img
            src="~/assets/images/hero-iphone-shadow.svg"
            alt="iPhone Shadow"
            class="iphone-shadow"
          />
          <img src="~/assets/images/hero-galaxy.svg" alt="Hero Galaxy" class="galaxy" />
          <img src="~/assets/images/hero-iphone.svg" alt="Hero iPhone" class="iphone" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'HeroSection'
})
</script>

<style scoped>
.bg-hero {
  background-image: url('~assets/images/bg-hero.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 70% 100%;
}
.iphone {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  animation-name: iphone;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform: translateY(0) rotateZ(0deg);
  transform-origin: bottom left;
}
.iphone-shadow {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  animation-name: opacityAnimation;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  opacity: 0.25;
}
.galaxy {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  animation-name: galaxy;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform: translateY(0) rotateZ(0deg);
  animation-delay: 0.5s;
  transform-origin: bottom right;
}
.galaxy-shadow {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  animation-name: opacityAnimation;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  opacity: 0.25;
  animation-delay: 0.5s;
}

.circle-app-icon {
  position: absolute;
  left: calc(1% + 3.5rem);
  top: 9rem;
  width: 7rem;
  height: 7rem;
  border-radius: 3.5rem;
  background: rgb(64, 130, 255);
  background: linear-gradient(
    135deg,
    rgba(64, 130, 255, 1) 0%,
    rgba(80, 95, 255, 1) 100%
  );
  animation-name: moveAndRotate;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform: translateY(0) rotateZ(0deg);
}

.waterdrop-app-icon,
.waterdrop-app-icon-small {
  position: absolute;
  width: 5rem;
  height: 5rem;
  top: 5rem;
  border-radius: 3.5rem 3.5rem 1rem 3.5rem;
  background: rgb(64, 130, 255);
  background: linear-gradient(
    135deg,
    rgba(64, 130, 255, 1) 0%,
    rgba(84, 88, 255, 1) 100%
  );
  animation-name: moveAndRotate;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform: translateY(0) rotateZ(0deg);
}

.waterdrop-app-icon {
  left: calc(25% + 2.5rem);
  top: 5rem;
}

.waterdrop-app-icon-small {
  left: calc(60% + 2.5rem);
  top: 2.5rem;
}

.square-app-icon {
  position: absolute;
  left: calc(35% + 4rem);
  top: 14rem;
  width: 8rem;
  height: 8rem;
  border-radius: 1.5rem;
  background: rgb(64, 130, 255);
  background: linear-gradient(
    135deg,
    rgba(64, 130, 255, 1) 0%,
    rgba(85, 87, 255, 1) 100%
  );
  animation-name: moveAndRotate;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform: translateY(0) rotateZ(0deg);
}

@keyframes moveAndRotate {
  0% {
    transform: translateY(0) rotateZ(0deg);
  }
  50% {
    transform: translateY(-3rem) rotateZ(-20deg);
  }
  100% {
    transform: translateY(0) rotateZ(0deg);
  }
}

@keyframes iphone {
  0% {
    transform: translateY(0) rotateZ(0deg);
  }
  50% {
    transform: translateY(-2.5rem) rotateZ(-2deg);
  }
  100% {
    transform: translateY(0) rotateZ(0deg);
  }
}
@keyframes galaxy {
  0% {
    transform: translateY(0) rotateZ(0deg);
  }
  50% {
    transform: translateY(-2.5rem) rotateZ(1.5deg);
  }
  100% {
    transform: translateY(0) rotateZ(0deg);
  }
}
@keyframes opacityAnimation {
  0% {
    opacity: 0.25;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0.25;
  }
}

a:link,
a:visited,
a:hover,
a:active {
  color: #515eff !important;
}
</style>