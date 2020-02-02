<template>
  <section class="bg-hero-wrapper" id="landing">
    <div class="bg-hero relative">
      <div class="container-xl pt-24 md:pt-12 relative">
        <div class="circle-app-icon"></div>
        <div class="waterdrop-app-icon"></div>
        <div class="square-app-icon hidden lg:block"></div>
        <div class="flex flex-row flex-wrap justify-center items-center px-5 md:px-16">
          <div class="flex flex-col w-full md:w-1/2 lg:mb-24">
            <h1
              class="text-3xl lg:text-4xl leading-tight text-center md:text-left font-bold mt-3 text-light z-50"
            >
              We build beautiful apps,
              <br class="hidden xl:block" />in record time.
            </h1>
            <div class="flex flex-row justify-center md:justify-start">
              <a href="mailto:hello@appditto.com">
                <button
                  class="text-xl font-extrabold text-primary bg-light px-12 py-2 rounded mt-4 mb-5 grow-2 btn-shdw-dark z-50"
                >Let's Talk</button>
              </a>
            </div>
          </div>
          <div class="flex flex-col w-full md:w-1/2 mt-4 mt-md-0 relative">
            <img
              src="~/assets/images/hero-phones-bg.svg"
              alt="Hero Phones Background"
              class="w-full"
            />
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'HeroSection'
})
</script>

<style scoped>
.bg-hero-wrapper {
  background: rgb(64, 130, 255);
  background: linear-gradient(
      171deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 78%,
      rgba(255, 255, 255, 1) 78.1%,
      rgba(255, 255, 255, 1) 100%
    ),
    linear-gradient(135deg, rgba(64, 130, 255, 1) 0%, rgba(96, 64, 255, 1) 100%);
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-hero {
  background-image: url('~assets/images/bg-hero-small.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 70% 100%;
}
@media only screen and (min-width: 768px) {
  .bg-hero-wrapper {
    background: rgb(64, 130, 255);
    background: linear-gradient(
        175deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0) 74%,
        rgba(255, 255, 255, 1) 74.1%,
        rgba(255, 255, 255, 1) 100%
      ),
      linear-gradient(
        135deg,
        rgba(64, 130, 255, 1) 0%,
        rgba(96, 64, 255, 1) 100%
      );
    background-repeat: no-repeat;
    background-size: cover;
  }
  .bg-hero {
    background-image: url('~assets/images/bg-hero.svg');
  }
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
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform: translateY(0) rotateZ(0deg);
}

.waterdrop-app-icon {
  position: absolute;
  width: 5rem;
  height: 5rem;
  left: calc(60% + 2.5rem);
  top: 2.5rem;
  border-radius: 3.5rem 3.5rem 1rem 3.5rem;
  background: rgb(64, 130, 255);
  background: linear-gradient(
    135deg,
    rgba(64, 130, 255, 1) 0%,
    rgba(84, 88, 255, 1) 100%
  );
  animation-name: moveAndRotate;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform: translateY(0) rotateZ(0deg);
}

@media only screen and (min-width: 992px) {
  .waterdrop-app-icon {
    left: calc(25% + 2.5rem);
    top: 5rem;
  }
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
  animation-duration: 12s;
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
@media only screen and (min-width: 768px) {
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
}
@keyframes iphone {
  0% {
    transform: translateY(0) rotateZ(0deg);
  }
  50% {
    transform: translateY(-2rem) rotateZ(-2deg);
  }
  100% {
    transform: translateY(0) rotateZ(0deg);
  }
}
@media only screen and (min-width: 768px) {
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
}
@keyframes galaxy {
  0% {
    transform: translateY(0) rotateZ(0deg);
  }
  50% {
    transform: translateY(-2rem) rotateZ(1.5deg);
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
</style>