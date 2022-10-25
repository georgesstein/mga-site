<script>
import SectionMain from "@/sections/SectionMain.vue";
import SectionAdvertisers from "@/sections/SectionAdvertisers.vue";
import SectionPublishers from "@/sections/SectionPublishers.vue";
import SectionAboutUs from "@/sections/SectionAboutUs.vue";
import SectionContactUs from "@/sections/SectionContactUs.vue";
import TheFooter from "@/components/TheFooter.vue";
import ParallaxBlock from "@/components/ParallaxBlock.vue";

export default {
  components: {
    SectionMain,
    SectionAdvertisers,
    SectionPublishers,
    SectionAboutUs,
    SectionContactUs,
    TheFooter,
    ParallaxBlock,
  },
};
</script>

<template>
  <SectionMain />
  <SectionAdvertisers />
  <ParallaxBlock />
  <SectionPublishers />
  <SectionAboutUs />
  <SectionContactUs />
  <TheFooter />
</template>

<style lang="scss">
</style>