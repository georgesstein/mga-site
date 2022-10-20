<script>
import HeadingBlock from "@/components/HeadingBlock.vue";
import AdvertisersTileItem from "@/components/AdvertisersTileItem.vue";
import PublishersTileItem from "@/components/PublishersTileItem.vue";

export default {
  // data() {
  //   return {
  //     tile: [
  //       {
  //         title:
  //           "Individual terms of work, include deposit for starting campaign.",
  //         iconUrl: "@/assets/publishers/image-01.svg",
  //         backgroundUrl: "@/assets/publishers/box/bg-publishers1.png",
  //       },
  //       {
  //         title:
  //           "Individual terms of work, include deposit for starting campaign.",
  //         iconUrl: "@/assets/publishers/image-02.svg",
  //         backgroundUrl: "@/assets/publishers/box/bg-publishers2.png",
  //       },
  //     ],
  //   };
  // },

  components: {
    HeadingBlock,
    AdvertisersTileItem,
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

    <div class="tiles">
      <div class="tile">
        <div class="tile-background tile-1">
          <img src="@/assets/publishers/image-01.svg" />
          <h3>
            Individual terms of work, include deposit for starting campaign.
          </h3>
        </div>
      </div>

      <div class="tile">
        <div class="tile-background tile-2">
          <img src="@/assets/publishers/image-02.svg" />
          <h3>
            We share our approach for your experience in online marketing.
          </h3>
        </div>
      </div>

      <div class="tile">
        <div class="tile-background tile-3">
          <img src="@/assets/publishers/image-03.svg" />
          <h3>
            Tasty offers in most popular verticals: nutra, gambling, app
            installs & crypto.
          </h3>
        </div>
      </div>

      <div class="tile">
        <div class="tile-background tile-4">
          <img src="@/assets/publishers/image-04.svg" />
          <h3>Worldwide coverage with focus on Tier 1, 2.</h3>
        </div>
      </div>

      <div class="tile">
        <div class="tile-background tile-5">
          <img src="@/assets/publishers/image-05.svg" />
          <h3>On-time & Flexible Payments.</h3>
        </div>
      </div>

      <div class="tile">
        <div class="tile-background tile-6">
          <img src="@/assets/publishers/image-06.svg" />
          <h3>Our family will support you 24/7 whenever you need.</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
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

  & .tiles {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 3px;

    &:hover {
      cursor: url("@/assets/icons/cursor.svg"), auto;
    }
  }

  .tile {
    width: 100%;
    height: 360px;
    overflow: hidden;
    position: relative;

    & h3 {
      @include medium-bold;
      font-size: 20px;
      color: $base;
    }

    &-background {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      row-gap: 20px;
      padding: 30px 50px 50px 50px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      transition: all 1s;
    }

    &-1 {
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
        url("@/assets/publishers/box/bg-publishers1.png");

      &:hover {
        transform: scale(1.1);
        background: linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.1)
          ),
          url("@/assets/publishers/box/bg-publishers1.png");
      }
    }

    &-2 {
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
        url("@/assets/publishers/box/bg-publishers2.png");

      &:hover {
        transform: scale(1.1);
        background: linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.1)
          ),
          url("@/assets/publishers/box/bg-publishers2.png");
      }
    }

    &-3 {
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
        url("@/assets/publishers/box/bg-publishers3.png");

      &:hover {
        transform: scale(1.1);
        background: linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.1)
          ),
          url("@/assets/publishers/box/bg-publishers3.png");
      }
    }

    &-4 {
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
        url("@/assets/publishers/box/bg-publishers4.png");

      &:hover {
        transform: scale(1.1);
        background: linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.1)
          ),
          url("@/assets/publishers/box/bg-publishers4.png");
      }
    }

    &-5 {
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
        url("@/assets/publishers/box/bg-publishers5.png");

      &:hover {
        transform: scale(1.1);
        background: linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.1)
          ),
          url("@/assets/publishers/box/bg-publishers5.png");
      }
    }

    &-6 {
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
        url("@/assets/publishers/box/bg-publishers6.png");

      &:hover {
        transform: scale(1.1);
        background: linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.1)
          ),
          url("@/assets/publishers/box/bg-publishers6.png");
      }
    }
  }
}
</style>