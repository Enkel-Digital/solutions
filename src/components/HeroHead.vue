<template>
  <!-- Hero head: will stick at the top on load -->
  <div class="hero-head">
    <!-- is fixed top will keep it sticky at the top of the page -->
    <nav class="navbar is-fixed-top" role="navigation">
      <!-- Container to force nav bar into center with wider side margins -->
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="../assets/logo_transparent.png" alt="Logo" />
          </a>

          <!-- Using <a> instead of button as it does not need an icon and dont have the inverted colors on click behaviour -->
          <a
            role="button"
            class="navbar-burger"
            :class="{ 'is-active': showMobileMenu }"
            aria-label="menu"
            data-target="navbar-menu"
            @click="showMobileMenu = !showMobileMenu"
          >
            <!-- 3 empty span tags to show the burger menu icon -->
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>

        <div
          class="navbar-menu has-text-right"
          :class="{ 'is-active': showMobileMenu }"
        >
          <!-- Show the menu at the other end -->
          <div class="navbar-end">
            <!-- <a class="navbar-item is-active"> </a> -->

            <!-- Using v-html instead of string interpolation to support html link names like using icons -->
            <a
              v-for="(menuItem, i) in menuItems"
              :key="i"
              class="navbar-item"
              v-html="menuItem.name"
              :href="menuItem.link"
              :target="menuItem.target"
            >
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeroHead",
  data() {
    return {
      showMobileMenu: false,

      menuItems: [
        { name: "Home", link: "#home" },
        { name: "About Us", link: "#WhoAreWe" },
        { name: "Services", link: "#WhatWeDo" },
        { name: "Past Projects", link: "" },
        { name: "Team", link: "#Team" },
        { name: "Contact", link: "" },
        {
          name: "<i class='fab fa-github' /> Github",
          link: "https://github.com/Enkel-Digital/",
          target: "_blank",
        },
      ],
    };
  },
};
</script>
