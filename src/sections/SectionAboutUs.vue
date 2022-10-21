<script>
import HeadingBlock from "@/components/HeadingBlock.vue";
export default {
  methods: {
    play() {
      this.$refs.videoPlayer.play();
    },
    pause() {
      this.$refs.videoPlayer.pause();
    },
    stop() {
      const { videoPlayer } = this.$refs;
      videoPlayer.pause();
      videoPlayer.currentTime = 0;
    },
    setSpeed(speed) {
      this.$refs.videoPlayer.playbackRate = speed;
    },
  },

  components: {
    HeadingBlock,
  },
};
</script>

<template>
  <div class="about">
    <HeadingBlock
      title="ABOUT US"
      descriptionColor="#FF2D55"
      description="Founded in 2017, MGA team was formed by group of affiliates with decade of online marketing experience. We help numerous advertisers to enlarge their sales and gain income. 
Whether you're an advertiser, publisher, or developer we are happy to consider cooperation on mutually beneficial conditions and assist in achieving business goals."
    />

    <div class="player-outer">
      <div class="player">
        <div class="controls">
          <img class="play" src="@/assets/about/btn.svg" />
          <img class="caption" src="@/assets/about/watch-now.svg" />
        </div>
      </div>
    </div>

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
  padding: 40px 150px;
  z-index: 20;
  position: relative;
  background-size: contain;
  background-color: $baseBackground;

  & .player-outer {
    height: 50vw;
    width: 100%;
    border-radius: 24px;
    background-size: contain;
    background-image: url("@/assets/about/player-outer.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 24px;

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

        &:hover {
          cursor: pointer;
          transform: scale(1.1)
        }
      }
    }
  }
}
</style>