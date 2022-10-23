<script>
import TheNavigation from "@/components/TheNavigation.vue";
import BaseLogo from "@/components/BaseLogo.vue";

export default {
  data() {
    return {
      scrollPosition: null,
    };
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },

  components: {
    BaseLogo,
    TheNavigation,
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<template>
  <div class="header" :class="{ 'header-scroll': scrollPosition > 50 }">
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
  position: fixed;
  top: 0;
  left: 0;
  padding: 0px 150px;
  z-index: 30;
  transition: background-color 0.2s, height 0.2s;
}

.header-scroll {
  backdrop-filter: blur(10px);
  background-color: $footerBackground;
  height: 90px;
}
</style>