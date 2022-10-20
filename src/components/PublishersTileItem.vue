
<script setup>
import { ref, watchEffect } from "vue";

const props = defineProps({
  backgroundImage: { type: String },
  title: { type: String },
});

const logo = ref();

watchEffect(async () => {
  logo.value = (
    await import(
      /* @vite-ignore */ `../assets/publishers/box/${props.backgroundImage}.png`
    )
  ).default;
});

const ds = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('${logo}')`,
};
const hs = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('${logo}')`,
};
</script>
<script>
export default {
  data() {
    return {
      isHover: false,
      bg1: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('${logo}')`,
      },
      bg2: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('${logo}')`,
      },
    };
  },
};
</script>

<template>
  <div class="tile">
    <div class="tile-background" :style="isHover ? bg1 : bg2">
      <slot></slot>
      <h3>
        {{ title }}
      </h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tile {
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;

  &:hover {
    cursor: url("@/assets/icons/cursor.svg"), auto;
  }

  &-background {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    row-gap: 20px;
    padding: 30px 50px 50px 50px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 1s;

    &:hover {
      transform: scale(1.1);
      background-image: linear-gradient(
          45deg,
          rgba(0, 0, 0, 0.1),
          rgba(0, 0, 0, 0.1)
        ),
        url("@/assets/publishers/box/bg-publishers4.png");
    }
  }

  & h3 {
    @include medium-bold;
    font-size: 20px;
    color: $base;
  }
}
</style>