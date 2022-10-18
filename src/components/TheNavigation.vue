<script>
import SvgJobs from "@/components/SvgJobs.vue";
import SvgPrivacy from "@/components/SvgPrivacy.vue";
import SvgTerms from "@/components/SvgTerms.vue";

export default {
  data() {
    return {
      isOpen: false,
    };
  },

  components: {
    SvgJobs,
    SvgPrivacy,
    SvgTerms,
  },
};
</script>

<template>
  <div class="navigation-container">
    <nav class="navigation">
      <a>Home</a>
      <a>Advertisers</a>
      <a>Publishers</a>
      <a>About Us</a>
      <a>Contact</a>
      <div @mouseover="isOpen = true" @mouseleave="isOpen = false">
        <a
          >Links
          <div class="links-container" v-if="isOpen">
            <div class="links-item">
              <SvgPrivacy />
            </div>
            <div class="links-item">
              <SvgTerms />
            </div>
            <div class="links-item">
              <SvgJobs />
            </div>
          </div>
        </a>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.navigation-container {
  display: flex;
  flex-direction: column;

  .navigation {
    @include small-bold;

    height: 100%;
    display: flex;
    align-items: center;
    color: $second;
    flex-direction: row;

    a {
      cursor: pointer;
      height: 50px;
      padding: 0px 20px;
      display: flex;
      align-items: center;

      &:hover {
        color: $base;
      }
    }
  }

  & .links-container {
    align-self: flex-end;
    top: 70px;
    right: 150px;
    position: fixed;
    background-color: rgba(58, 58, 60, 0.6);
    border-radius: 10px;
    transition: 0.3s;
  }

  & .links-item {
    padding: 13px 25px 13px 15px;
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);

    & svg {
      fill: $base;
    }
  }
}
</style>