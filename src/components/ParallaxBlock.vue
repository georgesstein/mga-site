<script>
import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";

export default {
  components: {
    ScrollParallax,
  },
};
</script>

<template>
  <div class="parallax">
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

    @media #{$laptopsLarge} {
      left: 40vw;
    }

    & img {
      @media #{$phones} {
        height: 50px;
      }

      @media #{$largeScreen} {
        height: 346px;
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

      @media #{$largeScreen} {
        height: 446px;
      }
    }
  }

  & .third {
    position: relative;
    left: 600px;
    transition: all 0.05s ease-in-out;
    -webkit-transition: all 0.05s ease-in-out;
    -moz-transition: all 0.05s ease-in-out;
    -o-transition: all 0.05s ease-in-out;

    @media #{$phones} {
      left: 220vw;
    }

    @media #{$laptopsLarge} {
      left: 40vw;
    }

    & img {
      @media #{$phones} {
        height: 60px;
      }

      @media #{$largeScreen} {
        height: 546px;
      }
    }
  }
}
</style>