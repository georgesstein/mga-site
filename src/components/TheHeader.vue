<script>
import TheNavigation from "@/components/TheNavigation.vue";
import BaseLogo from "@/components/BaseLogo.vue";

export default {
  data() {
    return {
      scrollPosition: null,
      windowWidth: null,
      isHamburgerDisplayed: false,
      isDropDownMenuOpen: false,
    };
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
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    defineIfHamburgerIsShown() {
      if (this.windowWidth < 1000) {
        this.isHamburgerDisplayed = true;
      } else {
        this.isHamburgerDisplayed = false;
        this.isDropDownMenuOpen = false;
      }
    },
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
      this.defineIfHamburgerIsShown();
    },
    openDropDownMenu() {
      this.isDropDownMenuOpen = true;
    },
    closeDropDownMenu() {
      this.isDropDownMenuOpen = false;
    },
  },

  components: {
    BaseLogo,
    TheNavigation,
  },

  mounted() {
    this.windowWidth = window.innerWidth;

    setTimeout(() => {
      this.defineIfHamburgerIsShown();
    }, 300);

    window.addEventListener("scroll", this.updateScroll);
    window.addEventListener("resize", this.updateWindowWidth);
  },
};
</script>

<template>
  <div class="header" :class="{ 'header-scroll': scrollPosition > 50 }">
    <a href="#home" v-smooth-scroll>
      <BaseLogo />
    </a>
    <TheNavigation v-if="isHamburgerDisplayed === false" />

    <!-- hamburger button --->
    <button
      v-if="isHamburgerDisplayed"
      class="hamburger"
      @click="isDropDownMenuOpen = !isDropDownMenuOpen"
    >
      <svg
        v-if="!isDropDownMenuOpen"
        fill="#AEAEB2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="50px"
        height="50px"
      >
        <path
          d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"
        />
      </svg>
      <svg
        v-else
        fill="#AEAEB2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="50px"
        height="50px"
      >
        <path
          d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
        />
      </svg>
    </button>

    <!-- drop down menu --->
    <div v-if="isDropDownMenuOpen" class="backdrop" @click="closeDropDownMenu">
      <nav class="navigation" @click="closeDropDownMenu">
        <router-link href="#home" to="/" v-smooth-scroll>Home</router-link>
        <router-link to="/" @click="scrollToMyEl('advertisers')" v-smooth-scroll
          >Advertisers</router-link
        >
        <router-link to="/" @click="scrollToMyEl('publishers')" v-smooth-scroll
          >Publishers</router-link
        >
        <router-link to="/" @click="scrollToMyEl('about')" v-smooth-scroll
          >About Us</router-link
        >
        <a href="#contact" v-smooth-scroll>Contact</a>
        <router-link to="/privacy-policy" href="#home" v-smooth-scroll>
          Privacy Policy
        </router-link>
        <a class="links-item">Terms</a>
        <a class="links-item">Jobs</a>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0px 10vw;
  z-index: 30;
  transition: background-color 0.2s, height 0.2s;

  & .hamburger {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    z-index: 1;

    & svg {
      cursor: pointer;
      transition: fill 0.2s;

      &:hover svg,
      &:hover {
        fill: white;
      }
    }
  }

  & .backdrop {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    color: $base;
  }

  & .navigation {
    @include small-bold;
    width: 200px;
    position: fixed;
    top: 100px;
    right: 11vw;
    display: flex;
    flex-direction: column;
    background-color: rgba(58, 58, 60, 0.9);
    backdrop-filter: blur(5px);

    & * {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $base;

      &:hover {
        background-color: $base;
        color: rgba(58, 58, 60, 0.9);
      }
    }
  }
}

.header-scroll {
  backdrop-filter: blur(10px);
  background-color: $footerBackground;
}
</style>