<script>
import HeadingBlock from "@/components/HeadingBlock.vue";
import PublishersTileItem from "@/components/PublishersTileItem.vue";

import { PUBLISHERS } from "@/assets/content.js";

export default {
  data() {
    return {
      publishers: PUBLISHERS,
    };
  },

  components: {
    HeadingBlock,
    PublishersTileItem,
  },
};
</script>

<template>
  <div class="publishers">
    <HeadingBlock
      beforeHeading="for"
      title="PUBLISHERS"
      description="Work with MGA team is not only about gaining money.
You become part of the family, which shares all knowledge and background to make you successful."
    />

    <div class="tile">
      <PublishersTileItem
        v-for="item in publishers"
        :key="item.title"
        :title="item.title"
        :backgroundImage="item.backgroundImage"
        :logoImage="item.logoImage"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.publishers {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
  padding: 40px 0px;
  background-color: $baseBackground;
  z-index: 20;
  position: relative;

  & .tile {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3px;

    &:hover {
      cursor: url("@/assets/icons/cursor.svg"), auto;
    }
  }
}
</style>