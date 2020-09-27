<template>
  <div id="app">
    <section id="home" class="hero is-fullheight">
      <HeroHead />
      <img src="./assets/hero.jpg" alt="Hero" class="image hero-image" />
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

// Globally shared styles
<style>
/* Custom span class to highlight keywords in the cards */
.highlight {
  /* Right and Left more padding */
  padding: 0.1em 0.2em 0.1em 0.2em;
  border-radius: 0.3em;
  background-color: rgb(255, 185, 56);
}
</style>
