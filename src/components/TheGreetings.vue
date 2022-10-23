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
  width: 450px;
  margin: 200px;
  z-index: 2;
  color: $base;

  h1 {
    @include greetings-title;
    margin-bottom: 10px;
    background: radial-gradient(55% 135% at 38% 30%, #ffffff 0%, #b8b8b8 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    @include small-bold;
    width: 400px;
    color: $second;
    margin-bottom: 40px;
    text-transform: lowercase;
  }
}
</style>