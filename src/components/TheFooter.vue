<script>
import BaseLogo from "@/components/BaseLogo.vue";
import BasePrivacy from "@/components/BasePrivacy.vue";
import BaseTerms from "@/components/BaseTerms.vue";
import BaseJobs from "@/components/BaseJobs.vue";

export default {
  components: {
    BaseLogo,
    BasePrivacy,
    BaseTerms,
    BaseJobs,
  },
};
</script>

<template>
  <div class="footer">
    <div class="left">
      <BaseLogo />
      <span>Internet Traffic World Leader</span>

      <div class="socials">
        <a class="socials-link">
          <img src="@/assets/icons/facebook.svg" />
        </a>
        <a class="socials-link">
          <img src="@/assets/icons/instagram.svg" />
        </a>
        <a class="socials-link">
          <img src="@/assets/icons/twitter.svg" />
        </a>
        <a class="socials-link">
          <img src="@/assets/icons/telegram.svg" />
        </a>
      </div>
    </div>

    <div class="right">
      <div class="links">
        <h4>Links</h4>

        <div class="links-block">
          <BasePrivacy />
          <BaseTerms />
          <BaseJobs />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  width: 100vw;
  height: 100%;
  display: flex;
  display: column;
  justify-content: space-between;
  padding: 50px 150px 60px 150px;
  background-color: $footerBackground;
  position: relative;
  z-index: 20;

  & .left {
    display: flex;
    flex-direction: column;
    row-gap: 30px;

    & span {
      @include small-light;
      color: $second;
    }

    & .socials {
      display: flex;
      column-gap: 15px;
      overflow: hidden;
      height: 100%;

      &-link {
        margin: 0;
        padding: 0;
        cursor: pointer;
      }
    }
  }

  & .right {
    @include small-light;
    height: 100%;
    display: flex;
    color: $second;

    & .links {
      display: flex;
      flex-direction: column;
      row-gap: 30px;

      & h4 {
        @include medium-bold;
        color: $base;
      }

      &-block {
        display: flex;
        flex-direction: column;
        row-gap: 20px;

        & *:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>