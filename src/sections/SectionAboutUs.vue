<script>
import HeadingBlock from "@/components/HeadingBlock.vue";

export default {
  data() {
    return {
      el: null,
      axes: null,
      speedCoef: null,
      distanceToElementTop: null,
      scrollPosition: null,
      isVideoPlaying: false,
    };
  },

  components: {
    HeadingBlock,
  },

  props: {
    speed: {
      type: Number,
      required: false,
      default: 0.15,
    },
    direction: {
      type: String,
      default: "y",
      required: false,
    },
  },

  methods: {
    defineParallaxStarts() {
      this.scrollPosition = window.pageYOffset;

      if (
        this.scrollPosition >
        this.distanceToElementTop - window.innerHeight
      ) {
        this.loadParallax();
      }
    },

    loadParallax() {
      requestAnimationFrame(() => {
        this.initDirection();
        this.el = this.$refs.player;

        if (this.el === null) return;

        window.addEventListener("scroll", () => {
          this.el.style.transform = `translate${this.axes}(${
            window.pageYOffset * this.speedCoef
          }px)`;
        });
      });
    },

    initDirection() {
      if (this.direction === "y") {
        this.axes = "Y";
        if (this.down) {
          this.speedCoef = this.speed;
        } else {
          this.speedCoef = -this.speed;
        }
      }
    },

    play() {
      this.isVideoPlaying = true;

      setTimeout(() => {
        if (this.isVideoPlaying) {
          this.$refs.videoPlayer.play();
        }
      }, 100);
    },
  },
  mounted() {
    if (this.$refs.about === null) return;
    this.distanceToElementTop = this.$refs.about.offsetTop;

    requestAnimationFrame(() => {
      window.addEventListener("scroll", this.defineParallaxStarts);
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
    <div
      ref="player"
      direction="y"
      :down="false"
      :speed="0.3"
      class="player-outer"
    >
      <div class="player">
        <div v-if="!isVideoPlaying" class="controls">
          <img @click="play" class="play" src="@/assets/about/btn.svg" />
          <img class="caption" src="@/assets/about/watch-now.svg" />
        </div>

        <video
          v-else
          class="player"
          ref="videoPlayer"
          width="700"
          height="300"
          controls
        >
          >
          <source src="@/assets/about/video.mp4" type="video/mp4" />
          Video cannot be played
        </video>
      </div>
    </div>
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

  @media #{$largeScreen} {
    padding: 40px 15vw;
  }

  & .player-outer {
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 24px;
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

    @media #{$laptopsLarge} {
      margin-top: 700px;
      margin-bottom: -550px;
    }

    @media #{$largeScreen} {
      margin-top: 850px;
      margin-bottom: -750px;
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

      & video {
        background: none;
      }

      & .controls {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

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
}
</style>