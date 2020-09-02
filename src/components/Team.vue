<template>
  <section class="section container">
    <h1 class="title">The Team</h1>
    <div class="columns is-multiline">
      <div v-for="(teamMember, i) in teamMembers" :key="i" class="column is-3">
        <div class="card">
          <div class="card-image">
            <figure class="image is-square">
              <img :src="teamMember.imageSrc" :alt="teamMember.name" />

              <!-- Social media links, only shown on hover for desktop and shown on click for mobile -->
              <!-- <div class="overlay" width="2em">
                <ul>
                  <li
                    v-for="(social, i) in teamMember.social"
                    :key="i"
                    v-html="social.icon"
                  >
                    <a :href="social.link" target="_blank" />
                  </li>
                </ul>
              </div> -->
            </figure>
          </div>
          <div class="card-content has-text-left">
            <p class="title">{{ teamMember.name }}</p>
            <p class="subtitle">{{ teamMember.title }}</p>
          </div>
        </div>
      </div>

      <div class="column is-3">
        <div class="card">
          <div class="card-content has-text-left">
            <p class="title" style="color: lightcoral">
              Love to work with us?<br />Want to take this spot?
            </p>
            <a
              href="#ContactUs"
              class="button"
              style="background: lightcoral; color: white"
            >
              Join us Now!
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhatWeDo",
  data() {
    return {
      teamMembers: [
        {
          name: "JJ",
          title: "Technical Director",
          imageSrc:
            "https://develop.enkeldigital.com/images/Profile%20pictures/JJ.JPG",
          social: [
            {
              icon: "<i class='fab fa-github' />",
              link: "https://github.com/Jaimeloeuf",
            },
            {
              icon: "<i class='fab fa-github' />",
              link: "https://github.com/Jaimeloeuf",
            },
          ],
        },
        {
          name: "Bin You",
          title: "Finance & HR Specialist",
          imageSrc:
            "https://develop.enkeldigital.com/images/Profile%20pictures/Bin You.jpg",
        },
        {
          name: "Jeremy Tay",
          title: "Operations Director",
          imageSrc:
            "https://develop.enkeldigital.com/images/Profile%20pictures/Jeremy.jpg",
        },
        {
          name: "Deon Yong",
          title: "Corporate Relationship Director",
          imageSrc:
            "https://develop.enkeldigital.com/images/Profile%20pictures/Deon.jpg",
        },
        {
          name: "Jania",
          title: "Marketing Director",
          imageSrc:
            "https://develop.enkeldigital.com/images/Profile%20pictures/jania.jpg",
        },
        {
          name: "Happy Haris",
          title: "Mobile Division Tech Lead",
          imageSrc:
            "https://develop.enkeldigital.com/images/Profile%20pictures/Haris.JPG",
        },
        {
          name: "Jessica",
          title: "Senior Software Engineer",
          imageSrc:
            "https://develop.enkeldigital.com/images/Profile%20pictures/Jessica.jpg",
        },
        {
          name: "Zi Kang",
          title: "Senior Backend Engineer",
          imageSrc:
            "https://develop.enkeldigital.com/images/Profile%20pictures/zk.jpg",
        },
        {
          name: "Yuliati",
          title: "Data Engineer",
          imageSrc:
            "https://develop.enkeldigital.com/images/Profile%20pictures/Yuli.jpg",
        },
        {
          name: "Dominic",
          title: "Business Development Executive",
          imageSrc:
            "https://develop.enkeldigital.com/images/Profile%20pictures/Dom.jpg",
        },
        {
          name: "Kong Wei",
          title: "Software Engineer",
          imageSrc:
            "https://develop.enkeldigital.com/images/Profile%20pictures/KongWei.jpg",
        },
        {
          name: "Catherine",
          title: "Frontend Engineer",
          imageSrc:
            "https://develop.enkeldigital.com/images/Profile%20pictures/Catherine.jpg",
        },
        {
          name: "Joshua",
          title: "Software Engineer",
          imageSrc:
            "https://develop.enkeldigital.com/images/Profile%20pictures/Joshua.jpg",
        },
        {
          name: "Nicholas",
          title: "Software Engineer",
          imageSrc:
            "https://develop.enkeldigital.com/images/Profile%20pictures/Nicholas.jpg",
        },
        {
          name: "Jin",
          title: "Software Engineer",
          imageSrc:
            "https://develop.enkeldigital.com/images/Profile%20pictures/jin.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* The overlay effect - lays on top of the container and over the image */
.overlay {
  position: absolute;
  /* bottom: 0; */
  right: 100;

  /* Pink see-through */
  background: rgba(255, 103, 103, 0.8);

  /* Color of the icons */
  color: white;
  opacity: 0;

  transition: 0.5s ease;

  width: 100%;
  font-size: 1.4em;
  padding: 0.2em;
  /* text-align: center; */
}

/* When you mouse over the container, fade in the overlay title */
.container:hover .overlay {
  opacity: 1;
}
</style>
