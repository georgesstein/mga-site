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
      <router-link href="#home" to="/" v-smooth-scroll>Home</router-link>
      <router-link to="/" @click="scrollToEl('advertisers')" v-smooth-scroll
        >Advertisers</router-link
      >
      <router-link to="/" @click="scrollToEl('publishers')" v-smooth-scroll
        >Publishers</router-link
      >
      <router-link to="/" @click="scrollToEl('about')" v-smooth-scroll
        >About Us</router-link
      >
      <a href="#contact" v-smooth-scroll>Contact</a>

      <div
        class="links-container"
        @mouseover="isOpen = true"
        @mouseleave="isOpen = false"
      >
        <a href="#links" v-smooth-scroll>Links</a>

        <div class="links" v-if="isOpen">
          <router-link
            to="/privacy-policy"
            href="#home"
            v-smooth-scroll
            class="links-item"
          >
            <BasePrivacy />
          </router-link>
          <a class="links-item">
            <BaseTerms />
          </a>
          <a class="links-item">
            <BaseJobs />
          </a>
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

    a {
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
        align-self: flex-end;
        top: 100px;
        right: 11vw;
        position: absolute;
        background-color: rgba(58, 58, 60, 0.9);
        border-radius: 10px;
        backdrop-filter: blur(15px);
        transition: 0.3s;

        &-item {
          height: 50px;
          padding: 0px;
          padding-right: 15px;
          cursor: pointer;
          border-bottom: 1px solid rgba(0, 0, 0, 0.25);

          @media #{$largeScreen} {
            height: 70px;
            padding-right: 25px;
            padding-left: 10px;
          }

          & svg {
            fill: $base;
          }
        }
      }
    }
  }
}
</style>