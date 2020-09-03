<template>
  <div id="app">
    <section id="home" class="hero is-fullheight">
      <HeroHead />
      <img :src="heroImage" alt="Hero" class="image hero-image" />
      <HeroBody />
    </section>

    <!-- Next sections after the main hero banner -->
    <WhoAreWe id="WhoAreWe" />
    <WhatWeDo id="WhatWeDo" />
    <Team id="Team" />
    <ContactUs id="ContactUs" />

    <Footer />
  </div>
</template>

<script>
import HeroHead from "@/components/HeroHead";
import HeroBody from "@/components/HeroBody";
import WhoAreWe from "@/components/WhoAreWe";
import WhatWeDo from "@/components/WhatWeDo";
import Team from "@/components/Team";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    HeroHead,
    HeroBody,
    WhoAreWe,
    WhatWeDo,
    Team,
    ContactUs,
    Footer,
  },
  data() {
    return {
      heroImage:
        "https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20(1%20of%201)-5.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    };
  },
};
</script>

// Load the bulma styles in the top level component
<style lang="sass" src="bulma" />

<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.hero-image {
  overflow: hidden;
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
}
</style>
