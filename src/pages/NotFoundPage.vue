<script>
import TheFooter from "@/components/TheFooter.vue";
import HeadingBlock from "@/components/HeadingBlock.vue";

export default {
  components: {
    TheFooter,
    HeadingBlock,
  },
};
</script>

<template>
  <div class="not-found">
    <HeadingBlock title="Page Not Found" />
    <p>
      Try to go
      <router-link href="#home" to="/" v-smooth-scroll>home</router-link>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
  background-color: $baseBackground;

  & p {
    @include small-light;
    color: $second;

    & a {
      color: $second;
      text-decoration: underline;

      &:hover {
        color: $base;
      }
    }
  }
}
</style>