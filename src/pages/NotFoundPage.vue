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
    <HeadingBlock title="Page Not Found" class="heading" />
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $baseBackground;
}
</style>