<template>
  <footer class="footer">
    <div class="container is-centered">
      <div class="columns has-text-left">
        <div class="column is-two-fifths">
          <p class="subtitle">About Us</p>
          <div class="content">
            <p>
              We are a team of dedicated professionals on a Mission to support
              Businesses with our team's Technical Expertises.
              <br />
              We are based in Singapore with a international team and presence.
            </p>
          </div>
        </div>

        <div class="column is-one-fifths">
          <p class="subtitle">Quick Links</p>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#WhoAreWe">About</a></li>
            <li><a href="#WhatWeDo">Services</a></li>
            <li><a href="#success">Success Stories</a></li>
            <li><a href="#Team">Team</a></li>
            <li><a href="#ContactUs">Contact</a></li>
          </ul>
        </div>

        <div class="column is-two-fifths">
          <div>
            <p class="subtitle">Subscribe to our Newsletter</p>
            <!-- @todo form -->
          </div>

          <!-- Social media platforms -->
          <div>
            <p class="subtitle">Follow us</p>
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
            <a
              href="https://www.linkedin.com/company/enkel-digital/"
              target="_blank"
              class="fa-2x mr-3"
            >
              <i class="fab fa-linkedin" />
            </a>
            <a
              href="https://t.me/Jaimeloeuf"
              target="_blank"
              class="fa-2x mr-3"
            >
              <i class="fab fa-telegram" />
            </a>
            <a
              href="https://www.ycombinator.com"
              target="_blank"
              class="fa-2x mr-3"
            >
              <i class="fab fa-y-combinator" />
            </a>
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
  background-color: rgb(51, 51, 51);
}

p,
a,
/* Prevents link from changing color when pressed */
a:visited {
  color: #737373;
}

i {
  /* Give the icons a lighter grey color to prevent the contrast from being too high */
  color: rgb(200, 200, 200);
}

.subtitle {
  /* White but not too glaring from the contrast */
  color: rgb(240, 240, 240);
}
</style>
