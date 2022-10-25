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

  methods: {
    scrollToMyEl(id) {
      setTimeout(() => {
        const myEl = document.getElementById(id);

        if (myEl === null) {
          return;
        }

        this.$smoothScroll({
          scrollTo: myEl,
        });
      }, 100);
    },
  },
};
</script>

<template>
  <div id="links" class="footer">
    <div class="left">
      <BaseLogo />
      <span>Internet Traffic World Leader</span>

      <div class="socials">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          class="icon icon-fill"
        >
          <i><img src="@/assets/icons/facebook.svg" /></i>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          class="icon icon-fill"
        >
          <i><img src="@/assets/icons/instagram.svg" /></i>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          class="icon icon-fill"
        >
          <i><img src="@/assets/icons/twitter.svg" /></i>
        </a>
        <a
          href="https://www.telegram.org"
          target="_blank"
          rel="noopener noreferrer"
          class="icon icon-fill"
        >
          <i><img src="@/assets/icons/telegram.svg" /></i>
        </a>
      </div>
    </div>

    <div class="right">
      <div class="links">
        <h4>Contacts</h4>

        <div class="links-block">
          <BaseMail href="mailto:info@rbs-agency.com" />
          <BasePhone href="tel:(480) 550-01-03" />
        </div>
      </div>
      <div class="links">
        <h4>Links</h4>

        <div class="links-block">
          <router-link
            to="/privacy-policy"
            href="#home"
            @keyup.enter="scrollToMyEl('home')"
            v-smooth-scroll
            ><BasePrivacy
          /></router-link>
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 50px 10vw 60px 10vw;
  background-color: $footerBackground;
  position: relative;
  z-index: 20;

  @media #{$phones} {
    flex-direction: column;
    row-gap: 30px;
    padding: 40px 5vw;
  }

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

      @media #{$phones} {
        justify-content: space-between;
      }

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

    @media #{$phones} {
      column-gap: 10px;
      justify-content: space-between;
    }

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
      }
    }
  }
}
</style>