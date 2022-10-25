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
    description_style() {
      const color = this.descriptionColor
        ? `${this.descriptionColor}`
        : "#AEAEB2";

      const marginTop = this.description ? "30px" : "0px";

      return {
        color: color,
        marginTop: marginTop,
      };
    },
  },
};
</script>

<template>
  <div class="heading">
    <span>{{ beforeHeading }}</span>
    <h2>{{ title }}</h2>
    <p :style="description_style">
      {{ description }}
    </p>
  </div>
</template>

<style lang="scss">
.heading {
  width: 700px;
  text-align: center;

  @media #{$phones} {
    width: 100%;
  }

  & span {
    @include small-light;
    color: $second;
  }

  & h2 {
    @include large;
    color: $base;

    @media #{$phones} {
      font-size: $phoneSize;
    }
  }

  & p {
    @include small-light;
    color: $second;
  }
}
</style>