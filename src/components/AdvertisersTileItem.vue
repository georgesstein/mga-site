<script setup>
import { ref, watchEffect } from "vue";

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
});

const iconImage = ref();

watchEffect(async () => {
  iconImage.value = (
    await import(/* @vite-ignore */ `../assets/tiles/${props.icon}.svg`)
  ).default;
});
</script>

<template>
  <div class="pile">
    <img :src="iconImage" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
.pile {
  padding: 20px;
  background-color: rgba(28, 28, 30, 0.8);
  border-radius: 15px;
  transition: background-color 0.3s ease-in;
  min-height: 330px;

  @media #{$phonesLarge} {
    min-height: 0;
  }

  @media #{$phones} {
    min-height: 0;
  }

  &:hover {
    background-color: #1c1c1e;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.25);
    cursor: url("../assets/icons/cursor.svg"), auto;
  }

  & img {
    padding: 10px;
  }

  & h3 {
    @include medium-bold;
    color: $base;
    padding: 10px 20px 10px 20px;
  }

  & p {
    @include small-light;
    color: $second;
    padding: 0px 20px 20px 20px;
  }
}
</style>