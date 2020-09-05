<template>
  <footer class="footer">
    <!-- <div class="content has-text-centered">
      <p>
        <strong>Bulma</strong> by
        <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
        licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
        website content is licensed
        <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
          CC BY NC SA 4.0
        </a>
      </p>
    </div> -->

    <div class="container is-centered">
      <div class="columns has-text-left">
        <div class="column is-two-fifths">
          <p class="title">About Us</p>
          <div class="content">
            <p>
              We are a team of dedicated professionals on a Mission to support
              Businesses with our team's Technical Expertises. We are based in
              Singapore with a international team and presence.
            </p>
          </div>
        </div>

        <div class="column is-one-fifths">
          <p class="title">Quick Links</p>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#WhoAreWe">About</a></li>
            <li><a href="#WhatWeDo">Services</a></li>
            <li><a href="#">Success Stories</a></li>
            <li><a href="#Team">Team</a></li>
            <li><a href="#ContactUs">Contact</a></li>
          </ul>
        </div>

        <div class="column is-two-fifths">
          <div>
            <p class="title">Subscribe to our Newsletter</p>
            <!-- form -->
          </div>

          <!-- Social media platforms -->
          <div>
            <p class="title">Follow us</p>
            <a
              href="https://medium.com/enkel-digital"
              target="_blank"
              class="fa-2x mr-3"
            >
              <i class="fab fa-medium" />
            </a>
            <a
              href="https://github.com/Enkel-Digital/"
              target="_blank"
              class="fa-2x mr-3"
            >
              <i class="fab fa-github" />
            </a>
            <a href="https://" target="_blank" class="fa-2x mr-3"
              ><i class="fab fa-linkedin"
            /></a>
            <a
              href="https://t.me/Jaimeloeuf"
              target="_blank"
              class="fa-2x mr-3"
            >
              <i class="fab fa-telegram" />
            </a>
            <a href="https://" target="_blank" class="fa-2x mr-3"
              ><i class="fab fa-patreon"
            /></a>
            <a href="https://" target="_blank" class="fa-2x mr-3"
              ><i class="fab fa-y-combinator"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  background: #313131;
  /* background: rgb(51, 51, 51); */
}
</style>
