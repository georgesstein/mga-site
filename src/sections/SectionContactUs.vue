<script>
import HeadingBlock from "@/components/HeadingBlock.vue";
import ContactButton from "@/components/ContactButton.vue";

export default {
  data() {
    return {
      name: "",
      email: "",
      phoneNumber: "",
      messageText: "",
    };
  },

  components: {
    HeadingBlock,
    ContactButton,
  },
};
</script>

<template>
  <div id="contact" class="contact">
    <HeadingBlock title="CONTACT US" />

    <div class="wrapper">
      <form
        class="form"
        action="mail.php"
        method="post"
        enctype="multipart/form-data"
      >
        <input
          type="text"
          name="name"
          required
          v-model="name"
          placeholder="Name *"
        />
        <input
          type="email"
          name="email"
          required
          v-model="email"
          placeholder="Email *"
        />
        <input
          type="tel"
          name="phone"
          required
          v-model="phoneNumber"
          placeholder="Phone *"
        />
        <textarea
          type="text"
          name="message"
          v-model="messageText"
          placeholder="Message"
        />

        <ContactButton tabindex="0" title="Send">
          <img src="@/assets/icons/button-mail.svg" />
        </ContactButton>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
  padding: 40px 0px;
  background-color: $baseBackground;
  z-index: 20;
  position: relative;

  @media #{$phones} {
    padding: 40px 5vw;
  }

  @media #{$laptopsLarge} {
    padding: 40px 5vw 100px 5vw;
  }

  @media #{$largeScreen} {
    padding: 40px 5vw 150px 5vw;
  }

  & .wrapper {
    width: 540px;
    height: 100%;

    @media #{$phones} {
      width: 100%;
    }

    & .form {
      width: 100%;
      display: flex;
      flex-direction: column;
      row-gap: 20px;

      & input {
        @include small-light;
        width: 100%;
        height: 45px;
        padding: 14px 8px 14px 16px;
        border-radius: 4px;
        font-size: 14px;
        border: 1px solid $base;
        background-color: transparent;
        caret-color: $base;
        color: $base;
      }

      & textarea {
        @include small-light;
        width: 100%;
        height: 180px;
        padding: 14px 8px 14px 16px;
        border-radius: 4px;
        font-size: 14px;
        border: 1px solid $base;
        background-color: transparent;
        caret-color: $base;
        color: $base;

        @media #{$laptopsLarge} {
          margin-bottom: 20px;
        }

        @media #{$largeScreen} {
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>