<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: false,
    },
  },

  computed: {
    button_style() {
      const width = this.width ? `${this.width}px` : "100%";

      return {
        width: width,
      };
    },
  },
};
</script>

<template>
  <button href="#" :style="button_style">
    <slot></slot>
    {{ title }}
  </button>
</template>

<style lang="scss">
@import "@/assets/styles/global";

button {
  @include small-bold;

  height: 50px;
  display: flex;
  padding: 0px 60px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: $highlight;
  color: $base;
  border-radius: 17px;
  border: none;
  z-index: 10;

  img {
    height: 20px;
    margin-right: 8px;
  }
}
</style>