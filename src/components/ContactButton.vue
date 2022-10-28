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
      const width = this.width ? `${this.width}px` : "";

      return {
        width: width,
      };
    },
  },
};
</script>

<template>
  <div href="#" class="wrapper" :style="button_style">
    <a class="btn btn-white btn-animate">
      <slot></slot>
      {{ title }}
    </a>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 360px;
  cursor: pointer;

  & a {
    border-radius: 17px;
  }

  @media #{$phones} {
    width: 100%;
  }
}

.btn:link,
.btn:visited {
  padding: 0px 60px;
  border-radius: 17px;
  transition: all 0.2s;
  width: 100%;

  @media #{$phones} {
    width: 100% !important;
  }
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  background-color: #fa4e6d;
}

.btn-white {
  @include small-bold;

  height: 60px;
  display: flex;
  padding: 0px 60px;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  background-color: $highlight;
  color: $base;
}
</style>
