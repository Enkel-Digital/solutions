<template>
  <section class="section container has-text-left">
    <!-- Extra break spacing so that when navigating with # ids, the navbar's border does not touch the content so closely -->
    <br />

    <!-- Section heading -->
    <h1 class="title" style="color: #e81050">Talk to Us!</h1>
    <p class="subtitle mb-6" style="font-size: 1em; color: grey">
      Let us help you reach your greatest potential.
    </p>

    <div class="columns is-centered">
      <div class="column card is-4 px-5" style="margin-right: 2em">
        <p class="title mt-2 mb-6">Contact us directly</p>

        <p class="subtitle">
          Let us help you accelerate your growth and achieve success!
          <br />
          <br />
          Book an appointment or give us a call today to start your journey with
          us.
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
            <a href="https://t.me/Jaimeloeuf" target="_blank">
              Telegram support
            </a>
          </li>
          <li><i class="fas fa-address-card icon" /> +65 94263687</li>
        </ul>
      </div>

      <ContactForm />
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
