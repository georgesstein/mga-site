<script>
export default {
  props: {
    beforeHeading: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    descriptionColor: {
      type: String,
      required: false,
    },
  },

  computed: {
    description_color() {
      const color = this.descriptionColor
        ? `${this.descriptionColor}`
        : "#AEAEB2";

      return {
        color: color,
      };
    },
  },
};
</script>

<template>
  <div class="heading">
    <span>{{ beforeHeading }}</span>
    <h2>{{ title }}</h2>
    <p :style="description_color">
      {{ description }}
    </p>
  </div>
</template>

<style lang="scss">
.heading {
  width: 700px;
  text-align: center;

  & span {
    @include small-light;
    color: $second;
  }

  & h2 {
    @include large;
    color: $base;
  }

  & p {
  }
}
</style>