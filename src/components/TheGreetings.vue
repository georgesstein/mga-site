<script>
export default {};
</script>

<template>
  <div class="greetings-container">
    <h1>RISE YOUR BUSINESS</h1>
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
  width: 100%;
  height: 100%;
  padding: 10vw;
  z-index: 2;
  color: $base;
  position: relative;

  @media #{$phones} {
    width: 100%;
  }

  h1 {
    @include greetings-title;
    width: 500px;
    margin-bottom: 10px;
    background: radial-gradient(55% 135% at 38% 30%, #ffffff 0%, #b8b8b8 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media #{$phones} {
      width: 100%;
      font-size: $phoneTitleSize;
      line-height: $phoneTitleSize;
    }

    @media #{$laptopsLarge} {
      width: 60%;
      font-size: 96px;
      line-height: 96px;
    }

    @media #{$largeScreen} {
      width: 60%;
      font-size: 160px;
      line-height: 160px;
    }
  }

  p {
    @include small-bold;
    width: 400px;
    color: $second;
    margin-bottom: 40px;
    text-transform: lowercase;

    @media #{$phones} {
      width: 100%;
    }

    @media #{$largeScreen} {
      @include medium-bold;
      width: 40%;
    }
  }
}
</style>