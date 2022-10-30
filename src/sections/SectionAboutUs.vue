<script>
// import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";
import HeadingBlock from "@/components/HeadingBlock.vue";

export default {
  // for player
  // methods: {
  //   play() {
  //     this.$refs.videoPlayer.play();
  //   },
  //   pause() {
  //     this.$refs.videoPlayer.pause();
  //   },
  //   stop() {
  //     const { videoPlayer } = this.$refs;
  //     videoPlayer.pause();
  //     videoPlayer.currentTime = 0;
  //   },
  //   setSpeed(speed) {
  //     this.$refs.videoPlayer.playbackRate = speed;
  //   },
  // },

  components: {
    HeadingBlock,
    // ScrollParallax,
  },

  props: {
    speed: {
      type: Number,
      required: false,
      default: 0.15,
    },
    down: {
      type: Boolean,
      default: false,
      required: false,
    },
    up: {
      type: Boolean,
      default: true,
      required: false,
    },
    right: {
      type: Boolean,
      default: true,
      required: false,
    },
    left: {
      type: Boolean,
      default: false,
      requiredequired: false,
    },
    direction: {
      type: String,
      default: "y",
      required: false,
    },
  },
  data() {
    return {
      el: null,
      axes: null,
      speedCoeff: null,
      distanceToElementTop: null,
      scrollPosition: null,
    };
  },
  methods: {
    defineScrollPosition() {
      this.scrollPosition = window.pageYOffset;

      if (
        this.scrollPosition > this.distanceToElementTop - 100 &&
        this.scrollPosition < this.distanceToElementTop + 100
      ) {
        this.loadParallax();
      }
    },

    loadParallax() {
      requestAnimationFrame(() => {
        this.initDirection();
        this.el = this.$refs.player;
        // const speedCoeff = this.down ? -this.speed : this.speed;
        // if (
        //   this.scrollPosition > this.distanceToElementTop - 100 &&
        //   this.scrollPosition < this.distanceToElementTop + 100
        // ) {
        console.log("HIP");

        window.addEventListener("scroll", () => {
          this.el.style.transform = `translate${this.axes}(${
            window.pageYOffset * this.speedCoeff
          }px)`;
        });
        // }
      });
    },

    initDirection() {
      if (this.direction === "x") {
        this.axes = "X";
        if (this.left) {
          this.speedCoeff = -this.speed;
        } else {
          this.speedCoeff = this.speed;
        }
      } else if (this.direction === "y") {
        this.axes = "Y";
        if (this.down) {
          this.speedCoeff = this.speed;
        } else {
          this.speedCoeff = -this.speed;
        }
      }
    },
  },
  mounted() {
    this.distanceToElementTop = this.$refs.about.offsetTop;

    requestAnimationFrame(() => {
      window.addEventListener("scroll", this.defineScrollPosition);
      // this.loadParallax();
    });
  },
};
</script>

<template>
  <div id="about" ref="about" class="about">
    <HeadingBlock
      title="ABOUT US"
      descriptionColor="#FF2D55"
      description="Founded in 2017, MGA team was formed by group of affiliates with decade of online marketing experience. We help numerous advertisers to enlarge their sales and gain income. 
Whether you're an advertiser, publisher, or developer we are happy to consider cooperation on mutually beneficial conditions and assist in achieving business goals."
    />
    <!-- <scroll-parallax -->
    <div
      ref="player"
      direction="y"
      :down="false"
      :speed="0.3"
      class="player-outer"
    >
      <div class="player">
        <div class="controls">
          <img class="play" src="@/assets/about/btn.svg" />
          <img class="caption" src="@/assets/about/watch-now.svg" />
        </div>
      </div>
    </div>
    <!-- </scroll-parallax> -->

    <!-- video player example --->
    <!-- <video width="320" height="240" ref="videoPlayer">
      <source
        src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <div>
      <button @click="play">play</button>
      <button @click="pause">pause</button>
      <button @click="stop">stop</button>
      <button @click="setSpeed(0.5)">0.5x</button>
      <button @click="setSpeed(1)">1x</button>
      <button @click="setSpeed(1.5)">1.5x</button>
      <button @click="setSpeed(2)">2x</button>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.about {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
  padding: 40px 10vw;
  margin-top: 100px;
  z-index: 20;
  position: relative;
  background-size: contain;
  background-color: $baseBackground;
  background-image: url("@/assets/about/logo-silhouette.svg");
  background-repeat: no-repeat;
  background-position: center;

  @media #{$phones} {
    padding: 40px 5vw;
  }

  & .player-outer {
    height: 45vw;
    width: 100%;
    border-radius: 24px;
    background-size: contain;
    background-image: url("@/assets/about/player-outer.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 24px;

    @media #{$phones} {
      margin-top: 800px;
      margin-bottom: -700px;
      padding: 14px;
    }

    @media #{$phonesLarge} {
      margin-top: 800px;
      margin-bottom: -700px;
    }

    @media #{$tabletsLandscape} {
      margin-top: 650px;
      margin-bottom: -550px;
    }

    @media #{$laptops} {
      margin-top: 550px;
      margin-bottom: -450px;
    }

    @media #{$largeScreen} {
      height: 40vw;
      width: 80%;
      margin-top: 850px;
    }

    .player {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 11px;
      background-size: contain;
      background-image: url("@/assets/about/player-background.png");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

      & .controls {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      & .play {
        height: 80px;
        transition: all 0.2s;

        @media #{$phones} {
          height: 10vw;
        }

        &:hover {
          cursor: pointer;
          transform: scale(1.1);
        }
      }

      & .caption {
        @media #{$phones} {
          height: 5vw;
        }
      }
    }
  }
}
</style>