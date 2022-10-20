<script>
import TheNavigation from "@/components/TheNavigation.vue";
import BaseLogo from "@/components/BaseLogo.vue";

export default {
  components: {
    BaseLogo,
    TheNavigation,
  },
};
</script>

<template>
  <div class="header">
    <BaseLogo />
    <TheNavigation />
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0px 150px;
  z-index: 30;
}
</style>