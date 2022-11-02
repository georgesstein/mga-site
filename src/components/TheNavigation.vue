<script>
import BaseJobs from "@/components/BaseJobs.vue";
import BasePrivacy from "@/components/BasePrivacy.vue";
import BaseTerms from "@/components/BaseTerms.vue";

export default {
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    scrollToEl(id) {
      setTimeout(() => {
        const el = document.getElementById(id);

        if (el === null) {
          return;
        }

        this.$smoothScroll({
          scrollTo: el,
        });
      }, 100);
    },
  },

  components: {
    BaseJobs,
    BasePrivacy,
    BaseTerms,
  },
};
</script>

<template>
  <div class="navigation-container">
    <nav class="navigation">
      <router-link href="#home" to="/" v-smooth-scroll class="navigation-item"
        >Home</router-link
      >
      <router-link
        to="/"
        @click="scrollToEl('advertisers')"
        v-smooth-scroll
        class="navigation-item"
        >Advertisers</router-link
      >
      <router-link
        to="/"
        @click="scrollToEl('publishers')"
        v-smooth-scroll
        class="navigation-item"
        >Publishers</router-link
      >
      <router-link
        to="/"
        @click="scrollToEl('about')"
        v-smooth-scroll
        class="navigation-item"
        >About Us</router-link
      >
      <a href="#contact" v-smooth-scroll class="navigation-item">Contact</a>

      <div
        class="links-container"
        @mouseover="isOpen = true"
        @mouseleave="isOpen = false"
      >
        <a href="#links" v-smooth-scroll class="navigation-item">Links</a>

        <div class="links" v-if="isOpen">
          <router-link
            tag="a"
            to="/privacy-policy"
            href="#home"
            v-smooth-scroll
            class="links-item"
          >
            <BasePrivacy />
          </router-link>

          <router-link
            to="/terms"
            href="#home"
            v-smooth-scroll
            class="links-item"
          >
            <BaseTerms />
          </router-link>

          <router-link
            to="/jobs"
            href="#home"
            v-smooth-scroll
            class="links-item"
          >
            <BaseJobs />
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.navigation-container {
  display: flex;

  .navigation {
    @include small-bold;

    height: 100%;
    width: max-content;
    display: flex;
    align-items: center;
    flex-direction: row;

    @media #{$largeScreen} {
      @include medium-bold;
    }

    &-item {
      cursor: pointer;
      height: 100px;
      padding: 0px 20px;
      display: flex;
      align-items: center;
      color: $second;

      &:hover {
        color: $base;
      }
    }

    & .links-container {
      display: flex;
      flex-direction: column;

      & .links {
        display: flex;
        flex-direction: column;
        row-gap: 1px;
        top: 100px;
        right: 11vw;
        position: absolute;
        background-color: rgba(58, 58, 60, 0.9);
        border-radius: 10px;
        backdrop-filter: blur(15px);
        transition: 0.3s;

        &-item {
          width: 100%;
          padding: 13px 35px 13px 17px;
          cursor: pointer;
          border-bottom: 1px solid rgba(0, 0, 0, 0.25);

          & svg {
            fill: $base;
          }
        }
      }
    }
  }
}
</style>