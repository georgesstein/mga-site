<script>
import HeadingBlock from "@/components/HeadingBlock.vue";
import AdvertisersTileItem from "@/components/AdvertisersTileItem.vue";

export default {
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
        title="Transparent Relations."
        description="Pay only for real performance according to your goals."
      >
        <img src="../assets/tiles/one.svg" />
      </AdvertisersTileItem>

      <AdvertisersTileItem
        title="Large-Scale Coverage."
        description="Get worldwide cover. Customizable landing pages and campaigns in 135+ Countries."
      >
        <img src="../assets/tiles/three.svg" />
      </AdvertisersTileItem>

      <AdvertisersTileItem
        title="Multiple Traffic Sources."
        description="We provide multiple traffic sources: social, ppc, native, app traffic."
      >
        <img src="../assets/tiles/two.svg" />
      </AdvertisersTileItem>

      <AdvertisersTileItem
        title="Easy to Track."
        description="Open API and postback integration to help you track your campaigns."
      >
        <img src="../assets/tiles/four.svg" />
      </AdvertisersTileItem>

      <AdvertisersTileItem
        title="Anti-Fraud System."
        description="All our publishers have to pass anti-fraud screening process before they can promote offers."
      >
        <img src="../assets/tiles/six.svg" />
      </AdvertisersTileItem>

      <AdvertisersTileItem
        title="Strong Team."
        description="Work with strong team. Our experts with rich experience will support you 24/7 whenever you need."
      >
        <img src="../assets/tiles/five.svg" />
      </AdvertisersTileItem>
    </div>
  </div>
</template>

<style lang="scss">
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
    grid-template-rows: 1fr 1fr;
    gap: 5px;
  }
}
</style>