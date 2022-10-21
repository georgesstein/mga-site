<script>
import SectionMain from "@/sections/SectionMain.vue";
import SectionAdvertisers from "@/sections/SectionAdvertisers.vue";
import SectionPublishers from "@/sections/SectionPublishers.vue"
import SectionAboutUs from "@/sections/SectionAboutUs.vue"

export default {
  components: {
    SectionMain,
    SectionAdvertisers,
    SectionPublishers,
    SectionAboutUs
  },
};
</script>

<template>
  <SectionMain />
  <SectionAdvertisers />
  <SectionPublishers />
  <SectionAboutUs />
</template>

<style lang="scss">
</style>