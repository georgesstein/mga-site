<script>
import TheFooter from "@/components/TheFooter.vue";
import HeadingBlock from "@/components/HeadingBlock.vue";
import SectionContactUs from "@/sections/SectionContactUs.vue";

export default {
  components: {
    TheFooter,
    HeadingBlock,
    SectionContactUs,
  },
};
</script>

<template>
  <div id="home" class="terms">
    <h2>Terms of use</h2>

    <p>
      Owner contact email: info@mga.team
      <br />
      Types of Data collected Among the types of Personal Data that this
      Application collects, by itself or through third parties, there are: first
      name; phone number; country; email address. Complete details on each type
      of Personal Data collected are provided in the dedicated sections of this
      privacy policy or by specific explanation texts displayed prior to the
      Data collection. Personal Data may be freely provided by the User, or, in
      case of Usage Data, collected automatically when using this Application.
      Unless specified otherwise, all Data requested by this Application is
      mandatory and failure to provide this Data may make it impossible for this
      Application to provide its services. In cases where this Application
      specifically states that some Data is not mandatory, Users are free not to
      communicate this Data without consequences to the availability or the
      functioning of the Service. Users who are uncertain about which Personal
      Data is mandatory are welcome to contact the Owner. Any use of Cookies –
      or of other tracking tools – by this Application or by the owners of
      third-party services used by this Application serves the purpose of
      providing the Service required by the User, in addition to any other
      purposes described in the present document and in the Cookie Policy, if
      available. Users are responsible for any third-party Personal Data
      obtained, published or shared through this Application and confirm that
      they have the third party's consent to provide the Data to the Owner. Mode
      and place of processing the Data Methods of processing The Owner takes
      appropriate security measures to prevent unauthorized access, disclosure,
      modification, or unauthorized destruction of the Data.
    </p>

    <SectionContactUs />
  </div>

  <TheFooter />
</template>

<style lang="scss" scoped>
.terms {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding: 150px 10vw 0px 10vw;
  background-color: $baseBackground;

  & h2 {
    @include medium-bold;
    color: $base;
    font-size: 36px;
  }

  & p {
    @include small-light;
    color: $second;
    line-height: 26px;
  }
}
</style>