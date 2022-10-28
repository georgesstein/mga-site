<script setup>
import { ref, watchEffect } from "vue";

const props = defineProps({
  backgroundImage: { type: String, required: true },
  logoImage: { type: String, required: true },
  title: { type: String, required: true },
});

const icon = ref();
const image = ref();

watchEffect(async () => {
  icon.value = (
    await import(
      /* @vite-ignore */ `../assets/publishers/${props.logoImage}.svg`
    )
  ).default;

  image.value = (
    await import(
      /* @vite-ignore */ `../assets/publishers/box/${props.backgroundImage}.jpg`
    )
  ).default;
});
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <img :src="icon" />
      <h3>{{ title }}</h3>
    </div>

    <img class="img" :src="image" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 3;

  @media #{$phones} {
    aspect-ratio: 3 / 2;
  }

  @media #{$phonesLarge} {
    aspect-ratio: 3 / 1;
  }

  @media #{$tabletsLandscape} {
    aspect-ratio: 4 / 3;
  }

  @media #{$laptops} {
    aspect-ratio: 4 / 3;
  }

  & .content {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    row-gap: 10px;
    padding: 10%;
    position: absolute;
    color: white;
    z-index: 1;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));

    @media #{$phones} {
      padding: 5px;
      height: 100%;
      background: rgba(28, 28, 30, 0.8);
    }

    @media #{$phonesLarge} {
      padding: 0px;
      background: rgba(28, 28, 30, 0.8);
    }

    @media #{$tabletsLandscape} {
      padding: 10%;
      position: absolute;
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
    }

    @media #{$laptops} {
      padding: 10%;
      position: absolute;
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
    }

    &:hover {
      background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
    }

    &:hover + img {
      transform: scale(1.1);
    }

    & h3 {
      @include medium-bold;
      font-size: 20px;
      color: $base;
    }
  }

  & .img {
    width: 100%;
    transition: all 1s;

    @media #{$phones} {
      display: none;
    }

    @media #{$phonesLarge} {
      display: none;
    }

    @media #{$tabletsLandscape} {
      display: block;
    }

    @media #{$laptops} {
      display: block;
    }
  }
}
</style>