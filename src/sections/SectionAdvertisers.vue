<script>
import HeadingBlock from "@/components/HeadingBlock.vue";
import AdvertisersTileItem from "@/components/AdvertisersTileItem.vue";

import { ADVERTISERS } from "@/assets/content.js";

export default {
  data() {
    return {
      advertisers: ADVERTISERS,
    };
  },

  components: {
    HeadingBlock,
    AdvertisersTileItem,
  },
};
</script>

<template>
  <div class="advertisers">
    <HeadingBlock beforeHeading="for" title="ADVERTISERS" />

    <div class="tiles">
      <AdvertisersTileItem
        v-for="item in advertisers"
        :key="item.title"
        :title="item.title"
        :description="item.description"
        :icon="item.icon"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.advertisers {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
  padding: 40px 150px;
  background-color: $baseBackground;
  z-index: 20;
  position: relative;

  & .tiles {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
  }
}
</style>