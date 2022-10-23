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
  <div>
    <a href="#" :style="button_style" class="btn btn-white btn-animate">
      <slot></slot>
      {{ title }}
    </a>
  </div>
</template>

<style lang="scss" scoped>
.btn:link,
.btn:visited {
  padding: 0px 60px;
  border-radius: 17px;
  transition: all 0.2s;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn-white {
  @include small-bold;

  height: 50px;
  display: flex;
  padding: 0px 60px;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  text-decoration: none;
  background-color: $highlight;
  color: $base;
}
</style>
