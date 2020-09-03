<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-two-thirds">
        <h1 class="title">Talk to Us!</h1>

        <div class="tile is-ancestor">
          <div class="tile is-4 is-vertical is-parent">
            <div class="tile is-child box has-text-left">
              <p class="title">Contact us directly</p>

              <br />

              <p class="subtitle">
                Let us help you accelerate your growth and achieve success!
                <br />
                Book an appointment or give us a call today to start your
                journey with us.
              </p>

              <br />

              <ul>
                <li>
                  <i class="fas fa-envelope icon" />
                  <a href="mailto://contact@enkeldigital.com">
                    contact@enkeldigital.com
                  </a>
                </li>
                <li>
                  <i class="fab fa-telegram icon" />
                  <a href="https://t.me/Jaimeloeuf"> Telegram support</a>
                </li>
                <li><i class="fas fa-address-card icon" /> +65 94263687</li>
              </ul>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from "@/components/ContactForm";

export default {
  name: "ContactUs",
  components: { ContactForm },
};
</script>
