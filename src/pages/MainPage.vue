<script>
import SectionMain from "@/sections/SectionMain.vue";
import SectionAdvertisers from "@/sections/SectionAdvertisers.vue";
import SectionPublishers from "@/sections/SectionPublishers.vue";
import SectionAboutUs from "@/sections/SectionAboutUs.vue";
import TheFooter from "@/components/TheFooter.vue"

export default {
  components: {
    SectionMain,
    SectionAdvertisers,
    SectionPublishers,
    SectionAboutUs,
    TheFooter,
  },
};
</script>

<template>
  <SectionMain />
  <SectionAdvertisers />
  <SectionPublishers />
  <SectionAboutUs />
  <TheFooter />
</template>

<style lang="scss">
</style>