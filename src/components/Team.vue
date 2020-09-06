<template>
  <section class="section container has-text-left">
    <!-- Extra break spacing so that when navigating with # ids, the navbar's border does not touch the content so closely -->
    <br />

    <!-- Section heading -->
    <div class="column is-left is-one-quarter">
      <h1 class="title mb-6" style="color: #e81050">
        Our Dedicated
        <br />
        Professionals
      </h1>
      <p class="subtitle mb-6" style="font-size: 1em; color: grey">
        Meet our highly skilled team helping you to reach your greatest
        potential.
      </p>
    </div>

    <div class="columns is-multiline">
      <div v-for="(teamMember, i) in teamMembers" :key="i" class="column is-3">
        <div class="card">
          <div class="card-image">
            <figure class="image is-square">
              <!-- Use native lazy loading, on none supported devices, fallback to eager loading. -->
              <img
                loading="lazy"
                :src="
                  require(`../assets/profile_pics/${teamMember.imageSrc}.jpg`)
                "
                :alt="teamMember.name"
              />

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
          <div class="card-content">
            <p class="title">{{ teamMember.name }}</p>
            <p class="subtitle">{{ teamMember.title }}</p>
          </div>
        </div>
      </div>

      <div class="column is-3">
        <div class="card">
          <div class="card-content">
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
          name: "Jeremy Tay",
          title: "Operations Director",
          imageSrc: "Jeremy",
        },
        {
          name: "JJ",
          title: "Technical Director",
          imageSrc: "JJ",
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
          title: "Finance Director",
          imageSrc: "Bin You",
        },
        {
          name: "Deon Yong",
          // title: "Corporate Relationship Director",
          // title: "Public Relations Director",
          title: "Communications Director",
          imageSrc: "Deon",
        },
        {
          name: "Yumi",
          title: "Art Director",
          imageSrc: "y1",
        },
        {
          name: "Yue Min",
          title: "Creative Director",
          imageSrc: "y4",
        },
        {
          name: "Jania",
          title: "Marketing Director",
          imageSrc: "jania",
        },
        {
          name: "Cheran",
          title: "Staff Engineer",
          imageSrc: "cheran",
        },
        {
          name: "Happy Haris",
          title: "Mobile Division Tech Lead",
          imageSrc: "Haris",
        },
        {
          name: "Jessica",
          title: "Senior Software Engineer",
          imageSrc: "Jessica",
        },
        {
          name: "Zi Kang",
          title: "Senior Backend Engineer",
          imageSrc: "zk",
        },
        {
          name: "Yuliati",
          title: "Data Engineer",
          imageSrc: "Yuli",
        },
        {
          name: "Dominic",
          title: "Business Development Executive",
          imageSrc: "Dom",
        },
        {
          name: "Kong Wei",
          title: "Software Engineer",
          imageSrc: "KongWei",
        },
        {
          name: "Catherine",
          title: "Frontend Engineer",
          imageSrc: "Catherine",
        },
        {
          name: "Joshua",
          title: "Software Engineer",
          imageSrc: "Joshua",
        },
        {
          name: "Nicholas",
          title: "Software Engineer",
          imageSrc: "Nicholas",
        },
        {
          name: "Jin",
          title: "Software Engineer",
          imageSrc: "jin",
        },
        {
          name: "Olivia",
          title: "Software Engineer",
          imageSrc: "olivia",
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
