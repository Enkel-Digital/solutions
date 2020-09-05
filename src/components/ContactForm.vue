<template>
  <!-- @todo Embed the teletif iframe here instead -->
  <div class="column card is-5 is-vertical">
    <!-- Load google's recaptcha script -->
    <script
      type="application/javascript"
      src="https://www.google.com/recaptcha/api.js"
      async
      defer
    />

    <p class="title">Contact Form</p>
    <p class="subtitle is-6">We will be in contact as soon as possible.</p>

    <div class="field">
      <label class="label">Name</label>
      <div class="control has-icons-left">
        <input
          class="input"
          v-model="name"
          type="text"
          placeholder="How do we address you?"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Company Name</label>
      <div class="control has-icons-left">
        <input
          class="input"
          v-model="companyName"
          type="text"
          placeholder="Optional"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-building"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left">
        <input class="input" v-model="email" type="email" placeholder="Email" />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
      <!-- @todo Add email input validation -->
      <!-- <p class="help is-danger">Invalid email</p> -->
    </div>

    <div class="field">
      <label class="label">Phone number (optional)</label>
      <div class="control has-icons-left">
        <input
          class="input"
          v-model="phoneNumber"
          type="tel"
          placeholder="Please include country/area code"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Subject</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          v-model="subject"
          type="text"
          placeholder="How can we help you?"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Any additional details"
          v-model="message"
        />
      </div>
    </div>

    <!-- Div for the recaptcha input, will be populated automatically be the recaptcha external script below -->
    <!-- Note that "gCaptchaError" has to be a function in the global namespace attached to the window object -->
    <div
      style="margin-top: 1em; margin-bottom: 1em"
      class="g-recaptcha"
      data-sitekey="6LdCM9sUAAAAABDfnyDJqwlECqaRbuCDldwkcvvP"
      data-error-callback="gCaptchaError"
    />

    <div class="field control">
      <button
        class="button"
        style="background: lightcoral; color: white"
        @click="submitForm"
      >
        Contact Me!
      </button>
    </div>
  </div>
</template>

<script>
window.gCaptchaError = function (error) {
  console.error("Captcha error: ", error);
  alert("Captcha error! Form submission disabled. Try again or contact us.");
};

export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    async submitForm(e) {
      // Prevent default behavior of reloading page if any
      e.preventDefault();

      // Create form object with all the data
      const form = {
        name: this.name,
        email: this.email,
        phoneNumber: this.phoneNumber,
        subject: this.subject,
        message: this.message,
        // Get the website that the user is on
        website: window.location.href,
        // Get the response token from the captcha UI
        // Uses null coalescing to prevent erroring out if grecaptcha method not loaded
        "g-recaptcha-response": window.grecaptcha?.getResponse(),
      };

      // If google captcha script is not loaded properly, or if the response is undefined or cant be read, end function
      if (!window.grecaptcha || !form["g-recaptcha-response"])
        return alert("Recaptcha failed, contact us directly instead.");

      // If name or email is not given, alert user and end the function
      if (!form.name || !form.email)
        return alert("Missing name or email in form!");

      try {
        // Send form data to API
        // Default options are marked with *
        const response = await fetch(
          // "https://us-central1-ekd-landing-page.cloudfunctions.net/contactForm",
          "http://localhost:3000/ping2",
          {
            method: "POST",
            // mode: "cors", // no-cors, *cors, same-origin
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
            cache: "no-cache",
            referrerPolicy: "no-referrer", // no-referrer, *client
          }
        );

        console.log(response);

        // @todo Fix this, since no matter whether response worked or not, regardless of code, it will still alert
        alert("Contact request submitted, we will reply asap. Thank you!");
      } catch (error) {
        console.error(error);
        /** @todo Show user and tell user to contact us directly */
      }
    },
  },
};
</script>
