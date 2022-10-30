<script>
export default {};
</script>

<template>
  <div class="greetings-container">
    <div style="width: max-content"><h1>RISE YOUR</h1></div>
    <h1>BUSINESS</h1>
    <p>
      DISCLOSE UNPRECEDENTED GROWTH WITH SOCIAL, PPC, NATIVE, UNIQUE STRATEGY
      CAMPAIGNS AND GET EXPLICIT EFFECT. PARTNERS ALL AROUND THE WORLD HAVE
      BUILT THEIR SUCCESSFUL BUSINESSES AND CAREERS WITH us.
    </p>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.greetings-container {
  /* width: 65vw; */
  width: min-content;
  height: 100%;
  padding-left: 10vw;
  z-index: 2;
  color: $base;
  position: relative;

  @media #{$phones} {
    width: 100%;
    padding-right: 10vw;
  }

  h1 {
    @include greetings-title;
    margin-bottom: 10px;
    background: radial-gradient(55% 135% at 38% 30%, #ffffff 0%, #b8b8b8 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media #{$phones} {
      font-size: $phoneTitleSize;
      line-height: $phoneTitleSize;
    }

    @media #{$laptopsLarge} {
      font-size: 86px;
      line-height: 86px;
    }

    @media #{$largeScreen} {
      font-size: 114px;
      line-height: 114px;
    }
  }

  p {
    @include small-bold;
    width: 100%;
    color: $second;
    margin-bottom: 40px;
    text-transform: lowercase;

    @media #{$largeScreen} {
      @include medium-bold;
    }
  }
}
</style>