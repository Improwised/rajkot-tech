<template>
  <div>
    <Header></Header>
    <div class="container">
      <div class="body-container" style="background-image: url('images/cover-bg.jpg')"></div>
      <div class="flex items-center content-center" v-if="$store.getters.liveEvents" v-for="(value, key, index) in $store.getters.liveEvents" :key="index">
        <div
          class="relative z-10 md:max-w-2xl px-6 py-4 rounded-lg text-center shadow-lg"
          style="background-color: rgba(252, 50, 43, .8)"
        >
          <h4 class="font-normal text-white text-xl leading-relaxed tracking-wider">Our next meetup</h4>

          <br />
          <span class="font-normal text-white text-sm lg:text-base mt-8 tracking-none">
            on
            <span
              class="inline-block bg-white pl-4 pr-2 py-2 text-headerdark rounded-lg font-bold"
            >{{value.date}}</span>
            <br />at
            <span
              class="inline-block bg-white pl-4 pr-2 py-2 mt-2 text-headerdark rounded-lg font-bold"
            >
              <a
                href="https://www.google.com/maps?ll=22.262051,70.752845&z=13&t=m&hl=en-US&gl=US&mapclient=embed&cid=10308873938467859809"
                target="_blank"
                class="tracking-wider"
              >{{value.venue}}</a>
            </span>
            <br />from
            <span
              class="inline-block bg-white pl-4 pr-2 py-2 mt-2 text-headerdark rounded-lg font-bold"
            >10:00 am</span>
          </span>
          <br />
          <a
            href="https://allevents.in/rajkot/laravel-rajkot-meetup-october-2019/80002416250362"
            class="inline-block bg-white hover:bg-white text-laracolor pl-4 pr-2 py-2 lg:py-3 lg:pl-5 lg:pr-4 font-bold rounded-lg mt-8 shadow-md hover:shadow-lg"
            target="_blank"
          >
            <div class="flex items-center">
              <span>Book your seat(s) now (Limited Seats)</span>
              <div class="w-8 h-8 bg-laracolor text-white text-center rounded-lg p-1 ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.293 17.293L12.707 18.707 19.414 12 12.707 5.293 11.293 6.707 15.586 11 6 11 6 13 15.586 13z"
                  />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="flex items-center content-center" v-if="$store.getters.liveEvents === null" >
        <div
          class="relative z-10 md:max-w-2xl px-6 py-4 rounded-lg text-center shadow-lg"
          style="background-color: rgba(252, 50, 43, .8)"
        >
          <h4
            class="font-normal text-white text-xl leading-relaxed tracking-wider"
          >We will be announcing our next meetup / workshop soon.</h4>

          <br />
          <span class="font-normal text-white text-base lg:text-xl mt-6 mb-4">
            Meanwhile, if you want to speak on a topic or want to take workshop,
            <a
              href="https://forms.gle/DHHBgtPjTd5Gm4hL6"
              target="_blank"
            >
              <span
                class="inline-block bg-white pl-4 pr-2 py-2 text-headerdark rounded-lg font-bold"
              >submit your proposal here</span>
            </a>
          </span>
          <br />
          <br />
          <span class="font-normal text-white text-base lg:text-xl mt-6 mb-4">
            Else if you want to request a workshop or a talk on a specific topic,
            <a
              href="https://forms.gle/R1P5nUsSZVWVThwx7"
              target="_blank"
            >
              <span
                class="inline-block bg-white pl-4 pr-2 py-2 text-headerdark rounded-lg font-bold"
              >let us know</span>
            </a>
          </span>
          <br />
        </div>
      </div>
    </div>
    <div class="sub-title">Chapters</div>
    <div class="events_list">
      <div class="_event">
        <div class="bimage">
          <a href="past-events/laravel">
            <img class="ch-img" src="../assets/images/laravel.svg" />
          </a>
        </div>
      </div>
      <div class="_event">
        <div class="bimage">
          <a href="past-events/vue">
            <img class="ch-img" src="../assets/images/vue.png" />
          </a>
        </div>
      </div>
      <div class="_event">
        <div class="bimage">
          <a href="past-events/docker">
            <img class="ch-img" src="../assets/images/docker.jpeg" />
          </a>
        </div>
      </div>
      <div class="_event">
        <div class="bimage">
          <a href="past-events/laravel">
            <img class="ch-img" src="../assets/images/seo.png" />
          </a>
        </div>
      </div>
    </div>
    <div class="row info">
      <div class="col-sm-12 info-title">Vision</div>
      <div class="col-sm-12 sub-info">Build a knowledge-exchange platform for all technology lovers.</div>
      <div class="col-sm-12 info-title">Mission</div>
      <div
        class="col-sm-12 sub-info"
      >Provide an opportunity to gain and share knowledge among software technology enthusiasts in the Rajkot.</div>
      <div class="col-sm-12 info-title">About Us</div>
      <div
        class="col-sm-12 sub-info"
      >We are a group of people who have successfully arranged various Laravel related Meetups in the Rajkot for the last one year. After all these Meetups we felt that technology Meetups can’t be restricted to one single technology. There should be no boundaries in technologies as technology is just a tool that can help to solve any real-world problem. We have come to an idea of this Rajkot.Tech.</div>
    </div>
  </div>
</template>

<script>
import Header from "~/layouts/header.vue";
import { getLiveEvents } from "~/static/js/events.js";
export default {
  components: {
    Header
  },
  head() {
    return {
      title: "Laravel Rajkot"
    };
  },
  async asyncData({ app, store }) {
    if (process.server) {
      let events = await getLiveEvents();
      store.commit("liveEvents", events);
    }
  }
};
</script>

<style scoped>
.info {
  background: #9a8e8e;
  text-align: center;
  color: white;
}
.info-title {
  font-size: 2.4rem;
}
.sub-info {
  font-size: 22px;
  padding: 20px 250px 39px 250px;
}
.sub-title {
  text-align: center;
  padding: 20px 0px 27px 0px;
  /* background: #d4d0d0; */
  font-size: 28px;
  font-weight: bold;
  /* color: #fff; */
}
.container {
  position: relative;
  overflow: hidden;
  height: 100vh;
  align-content: center;
  display: flex;
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important;
  overflow: hidden !important;
  min-width: 100%;
  margin-top: 90px;
}
.body-container {
  position: absolute;
  z-index: 0;
  width: 100%;
  left: 0;
  top: 0;
  background-size: cover;
  height: 100%;
}
.events_list {
  display: flex;
  flex-wrap: wrap;
  padding: 31px 17px 30px 320px;
  width: 1555px;
}
._event {
  width: 22.33%;
  margin: 0.9375rem;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #e2e1e1;
}
.bimage {
  height: auto;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #efefef;
}
.ch-img {
  max-width: 100%;
  width: 12rem;
  height: 12rem;
}

#menu-toggle:checked + #menu {
  display: block;
}
#dropdown-toggle:checked + #dropdown {
  display: block;
}
a,
span {
  position: relative;
  text-decoration: none;
  transition: all 0.3s ease;
}
a.arrow,
span.arrow {
  display: flex;
  align-items: center;
  font-weight: 600;
  line-height: 1.5;
}
a.arrow .arrow_icon,
span.arrow .arrow_icon {
  position: relative;
  margin-left: 0.5em;
}
a.arrow .arrow_icon svg,
span.arrow .arrow_icon svg {
  transition: transform 0.3s 0.02s ease;
  margin-right: 1em;
}
a.arrow .arrow_icon::before,
span.arrow .arrow_icon::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  width: 0;
  height: 2px;
  background: #38b2ac;
  transform: translateY(-50%);
  transition: width 0.3s ease;
}
a.arrow:hover .arrow_icon::before,
span.arrow:hover .arrow_icon::before {
  width: 1em;
}
a.arrow:hover .arrow_icon svg,
span.arrow:hover .arrow_icon svg {
  transform: translateX(0.75em);
}
.avatar {
  height: 5rem !important;
  width: 5rem !important;
}
.dotted:after {
  content: "";
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 50%;
  height: 100%;
  height: inherit;
  border-left: 2px dotted white;
}

.dotted {
  position: relative;
}
</style>