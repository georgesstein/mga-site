<script>
import BaseLogo from "@/components/BaseLogo.vue";
import BasePrivacy from "@/components/BasePrivacy.vue";
import BaseTerms from "@/components/BaseTerms.vue";
import BaseJobs from "@/components/BaseJobs.vue";
import BaseMail from "@/components/BaseMail.vue";
import BasePhone from "@/components/BasePhone.vue";

export default {
  components: {
    BaseLogo,
    BasePrivacy,
    BaseTerms,
    BaseJobs,
    BaseMail,
    BasePhone,
  },
};
</script>

<template>
  <div class="footer">
    <div class="left">
      <BaseLogo />
      <span>Internet Traffic World Leader</span>

      <div class="socials">
        <a class="icon icon-fill">
          <i><img src="@/assets/icons/facebook.svg" /></i>
        </a>
        <a class="icon icon-fill">
          <i><img src="@/assets/icons/instagram.svg" /></i>
        </a>
        <a class="icon icon-fill">
          <i><img src="@/assets/icons/twitter.svg" /></i>
        </a>
        <a class="icon icon-fill">
          <i><img src="@/assets/icons/telegram.svg" /></i>
        </a>
      </div>
    </div>

    <div class="right">
      <div class="links">
        <h4>Contacts</h4>

        <div class="links-block">
          <BaseMail />
          <BasePhone />
        </div>
      </div>
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
$icon-size: 50px;
$border-radius: 0.5;

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
      height: $icon-size;

      & .icon {
        cursor: pointer;
        position: relative;
        display: inline-block;
        width: $icon-size;
        height: $icon-size;
        border-radius: $icon-size * $border-radius;
        overflow: hidden;
        &::before,
        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          transition: all 0.25s ease;
          border-radius: $icon-size * $border-radius;
        }

        & i {
          position: relative;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.25s ease;
        }
      }

      & .icon-fill {
        &::before {
          transition-duration: 0.5s;
          box-shadow: inset 0 0 0 1px $highlight;
        }
        &:hover::before {
          box-shadow: inset 0 0 0 $icon-size $highlight;
        }
      }
    }
  }

  & .right {
    @include small-light;
    height: 100%;
    display: flex;
    column-gap: 60px;
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