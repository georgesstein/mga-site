<script>
export default {};
</script>

<template>
  <div class="logo">
    <div class="logo-image">
      <img src="@/assets/icons/logo-hat.svg" />
    </div>
    <div class="logo-text">
      <img src="@/assets/icons/logo-mga.svg" />
      <img src="@/assets/icons/logo-team.svg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  height: 56px;
  display: flex;
  column-gap: 20px;
  cursor: pointer;

  &-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>