<template>
  <section class="container section has-text-left">
    <!-- Extra break spacing so that when navigating with # ids, the navbar's border does not touch the content so closely -->
    <br />

    <!-- Section heading -->
    <h1 class="title" style="color: #e81050">What we do</h1>

    <div class="tile is-ancestor">
      <div class="tile is-6 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="title">
            <i class="fas fa-lightbulb" /> SME Technology Partner
          </p>
          <p>
            Run ads, build landing pages. Build marketing funnels. Setting up
            google analytics, setting up custom analytics platforms. Marketing
            efforts / SEO
          </p>
        </div>
        <div class="tile is-child box">
          <p class="title"><i class="fas fa-layer-group" /> UI/UX Design</p>
          <p>
            We design beautiful, functional and purposeful apps, webapps and
            websites. From Wireframes to MVP and Pixel-Perfect designs. We
            simplify complex workflows and bring out the beauty of your brand
            with our simple design philosophies.
          </p>
        </div>
        <div class="tile is-child box">
          <p class="title">
            <i class="fas fa-cloud" /> Cloud / Devops / Hosting
          </p>
          <p>
            Whether your need to run your application in the Cloud / on premise
            or in a Swiss Data Center depending on your requirements, you can
            count on us to deliver. We support fully automated deployments,
            local or test environments, and even complex requirements such as
            Client Data Confidentiality or regulatory mandates can be covered by
            us.
          </p>
        </div>
        <div class="tile is-child box">
          <p class="title"><i class="fas fa-search" /> Marketing & SEO</p>
          <p>Marketing efforts / SEO</p>
        </div>
        <div class="tile is-child box">
          <p class="title"><i class="fas fa-ad" /> Ad Campaigns</p>
          <p class="title"><i class="fas fa-bullhorn" /> Ad Campaigns</p>
          <p class="title"><i class="fas fa-poll" /> Ad Campaigns</p>
          <p>
            Run ads, build landing pages. Build marketing funnels. Setting up
            google analytics, setting up custom analytics platforms.
          </p>
        </div>
        <div class="tile is-child box">
          <p class="title" style="margin-bottom: 1em">
            <i class="fas fa-user-shield" /> Security
          </p>
          <div class="subtitle content">
            <ul>
              <li><i class="fas fa-user-secret" /> Security Consultancy</li>
              <li><i class="fas fa-shield-alt" /> Security Implmentation</li>
              <li>
                <i class="fas fa-user-shield" /> Data storage and Legal review
              </li>
              <li><i class="fas fa-mask" /> White hat penetration testing</li>
            </ul>
          </div>
          <p>
            Perfect for SMEs when u are unable to hire a dedicated security
            team. Or when your team is made up of mostly juniors, and might not
            be super experienced with potential loopholes
          </p>
        </div>
        <div class="tile is-child box">
          <p class="title"><i class="fas fa-cube" /> Blockchain Consulting</p>
          <p class="title"><i class="fas fa-cubes" /> Blockchain Consulting</p>
          <p class="title"><i class="fas fa-link" /> Blockchain Consulting</p>
          <p>
            Take advantage of the latest blockchain development to see how your
            businesses can imporve
          </p>
        </div>
        <div class="tile is-child box">
          <p class="title"><i class="fas fa-user-graduate" /> Training</p>
          <p>
            Perfect for SMEs when most of your team is made up of juniors, and
            might not be super experienced with many big picture topics
          </p>
        </div>
      </div>

      <div class="tile is-6 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="title"><i class="fas fa-terminal" /> Development</p>
          <!-- @todo Change to "develop", then add things like, software development / app development / mobile / cloud -- then auto change every 2 seconds -->
          <!-- <p class="title"><i class="fas fa-code" /> Web Development</p> -->
          <p>
            Grow your business and provide more services to your clientele. We
            build custom solutions, that are functional, secure and scalable,
            while being highly performant and cost effective for you.
            <!--  -->
            Our team is experienced with modern technologies and programming
            languages. Our processes are effective and efficient to build
            products on time and on budget.
          </p>
        </div>
        <div class="tile is-child box">
          <p class="title">
            <i class="fas fa-user-friends" /> Dedicated Developers<br />
          </p>
          <p>
            We provide you talented and experienced developers for you to manage
            your project. Frontend developers, backend developers, full-stack
            developers, UX designers or devops.
          </p>
          <br />
          We have talents from across the industry, ready to help you execute
          your vision such as
          <ul class="list">
            <li><i class="fab fa-adobe" /> Video production</li>
            <li><i class="fas fa-drafting-compass" /> UI/UX</li>
            <li><i class="fas fa-database" /></li>
            <li><i class="fab fa-invision" /></li>
          </ul>
        </div>
        <div class="tile is-child box">
          <p class="title">
            <i class="fas fa-chart-line" /> Data Analytics<br />
            <i class="fas fa-chart-bar" /> Data Analytics<br />
            <i class="fas fa-chart-area" /> Data Analytics<br />
          </p>
          <p>
            Like most companies that have alot of data lying around, and do not
            know how to act upon it or even use the data. We are here to help.
            With our team of data engineers / analysts and our industry
            partners, we can help you build data solutions to quickly and
            effectively utilize the data for business value.
          </p>
        </div>
        <div class="tile is-child box">
          <p class="title">
            <i class="fas fa-globe-africa" /> Business Strategy<br />
            <i class="fas fa-lock" /> Business Strategy<br />
            <i class="fas fa-unlock-alt" /> Business Strategy<br />
            <i class="fas fa-exchange-alt" /> Business Strategy<br />
            <i class="fas fa-key" /> Business Strategy<br />
          </p>
          <p>
            Strategy, the thing that defines your business. It is also one of
            the hardest things to do by yourself. With the help of our business
            consultants and residential mentors,
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhatWeDo",
};
</script>
