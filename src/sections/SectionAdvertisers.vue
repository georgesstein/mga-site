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
  <div id="advertisers" class="advertisers">
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
  padding: 40px 10vw;
  background-color: $baseBackground;
  z-index: 20;
  position: relative;
  border-top-left-radius: 50% 10vw;
  border-top-right-radius: 50% 10vw;
  overflow: hidden;

  @media #{$phones} {
    padding: 40px 5vw;
  }

  & .tiles {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;

    @media #{$phones} {
      grid-template-columns: 1fr;
    }

    @media #{$phonesLarge} {
      grid-template-columns: 1fr;
    }

    @media #{$tabletsLandscape} {
      grid-template-columns: 1fr 1fr;
    }

    @media #{$laptops} {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
</style>