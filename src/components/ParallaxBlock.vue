<script>
// import { ref } from "vue";
import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";

export default {
  components: {
    ScrollParallax,
  },
};

// let didScroll = false;

// // const parallaxTitle = document.querySelector("to-left");

// const scrollInProgress = () => {
//   didScroll = true;
// };

// const raf = () => {
//   // if (didScroll) {
//   requestAnimationFrame(() => {
//     parallaxTitles.forEach((element, index) => {
//       console.log(element);
//       element.style.transform = "translateX(" + window.scrollY / 10 + "%)";
//     });
//   });
//   // didScroll = false;
// };
// // requestAnimationFrame(raf);
// // };

// requestAnimationFrame(raf);
// // window.addEventListener('scroll', scrollInProgress)
// window.addEventListener("scroll", () => {
//   requestAnimationFrame(raf);
// });
// export default {
//   setup() {
//     const one = ref(null);
//     const two = ref(null);
//     const three = ref(null);

//     function x() {
//       const scrolled = window.pageYOffset;

//       const toLeftCoords = scrolled * -0.3 + "px";
//       const toRightCoords = scrolled * 0.3 + "px";

//       one.value.style.transform = "translateX(" + toLeftCoords + ")";
//       two.value.style.transform = "translateX(" + toRightCoords + ")";
//       three.value.style.transform = "translateX(" + toLeftCoords + ")";
//     }

//     window.addEventListener("scroll", x);

//     return {
//       one,
//       two,
//       three,
//     };
//   },
// };
</script>

<template>
  <div class="parallax">
    <!-- <img class="to-left" ref="one" src="@/assets/parallax/MARKETING.svg" />
    <img class="to-right" ref="two" src="@/assets/parallax/GLOBAL.svg" />
    <img class="to-left" ref="three" src="@/assets/parallax/AGENCY.svg" /> -->

    <scroll-parallax class="first" direction="x" :left="true" :speed="0.3">
      <img src="@/assets/parallax/MARKETING.svg" />
    </scroll-parallax>

    <scroll-parallax class="second" direction="x" :right="true" :speed="0.3">
      <img src="@/assets/parallax/GLOBAL.svg" />
    </scroll-parallax>

    <scroll-parallax class="third" direction="x" :left="true" :speed="0.3">
      <img src="@/assets/parallax/AGENCY.svg" />
    </scroll-parallax>
  </div>
</template>

<style lang="scss" scoped>
.parallax {
  color: $base;
  width: 100%;
  background-color: $baseBackground;
  position: relative;
  z-index: 20;
  overflow: hidden;

  & .first {
    position: relative;
    left: 400px;
    transition: all 0.05s ease-in-out;
    -webkit-transition: all 0.05s ease-in-out;
    -moz-transition: all 0.05s ease-in-out;
    -o-transition: all 0.05s ease-in-out;

    @media #{$phones} {
      left: 200vw;
    }

    & img {
      @media #{$phones} {
        height: 50px;
      }
    }
  }

  & .second {
    position: relative;
    left: -400px;
    transition: all 0.05s ease-in-out;
    -webkit-transition: all 0.05s ease-in-out;
    -moz-transition: all 0.05s ease-in-out;
    -o-transition: all 0.05s ease-in-out;

    @media #{$phones} {
      left: -200vw;
    }

    & img {
      @media #{$phones} {
        height: 70px;
      }
    }
  }

  & .third {
    position: relative;
    left: 400px;
    transition: all 0.05s ease-in-out;
    -webkit-transition: all 0.05s ease-in-out;
    -moz-transition: all 0.05s ease-in-out;
    -o-transition: all 0.05s ease-in-out;

    @media #{$phones} {
      left: 220vw;
    }

    & img {
      @media #{$phones} {
        height: 60px;
      }
    }
  }
}
</style>