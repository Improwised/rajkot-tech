<template>
  <div>
    <Header></Header>
    <section
      class="relative bg-blue-700 px-4 lg:px-20 overflow-hidden h-screen flex items-center content-center"
    >
      <div
        class="bg-cover absolute top-0 left-0 z-0 w-full h-full"
        style="background-image: url('images/cover-bg.jpg')"
      ></div>
      <div class="flex items-center content-center">
        <div
          class="relative z-10 md:max-w-2xl px-6 py-4 rounded-lg text-center shadow-lg"
          style="background-color: rgba(252, 50, 43, .8)"
        >
          <h4 class="font-normal text-white text-xl leading-relaxed tracking-wider">Our next meetup</h4>

          <span class="text-white text-3xl lg:text-4xl leading-relaxed tracking-wider">October'19</span>
          <br />
          <span class="font-normal text-white text-sm lg:text-base mt-8 tracking-none">
            on
            <span
              class="inline-block bg-white pl-4 pr-2 py-2 text-headerdark rounded-lg font-bold"
            >20th October 2019</span>
            <br />at
            <span
              class="inline-block bg-white pl-4 pr-2 py-2 mt-2 text-headerdark rounded-lg font-bold"
            >
              <a
                href="https://www.google.com/maps?ll=22.262051,70.752845&z=13&t=m&hl=en-US&gl=US&mapclient=embed&cid=10308873938467859809"
                target="_blank"
                class="tracking-wider"
              >R. K. University City Campus</a>
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
      <div class="flex items-center content-center" v-if="!$store.getters.liveEvents">
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
            <a href="https://forms.gle/DHHBgtPjTd5Gm4hL6" target="_blank">
              <span
                class="inline-block bg-white pl-4 pr-2 py-2 text-headerdark rounded-lg font-bold"
              >submit your proposal here</span>
            </a>
          </span>
          <br />
          <br />
          <span class="font-normal text-white text-base lg:text-xl mt-6 mb-4">
            Else if you want to request a workshop or a talk on a specific topic,
            <a href="https://forms.gle/R1P5nUsSZVWVThwx7" target="_blank">
              <span
                class="inline-block bg-white pl-4 pr-2 py-2 text-headerdark rounded-lg font-bold"
              >let us know</span>
            </a>
          </span>
          <br />
        </div>
      </div>
    </section>
    <section class="relative flex flex-col lg:flex-row">
      <div v-for="(value, key, index) in $store.getters.pastEvents"
                :key="index"
        class="w-full lg:w-3/4 flex flex-wrap bg-headerdark text-white py-20 px-4 lg:px-20 lg:flex-row"
      >
        <div class="w-full lg:w-1/2 lg:px-16" v-for="(a, key, index) in value.agenda"
                :key="index">
          <h6 class="uppercase text-sm text-gray-700 font-semibold tracking-wider" >
            Our Next
            <span class="text-laracolor">Meetup</span>
          </h6>
          <h2
            class="text-3xl font-semibold leading-tight mt-6"
          >{{a.title}}</h2>
          <h2 class="text-xl font-medium leading-tight mt-6">
            <img slot="icon" src="https://avatars.io/twitter/hardikdangar" class="avatar rounded" />
            by
            <a href="https://twitter.com/hardikdangar" target="_blank">{{a.speaker}}</a>
          </h2>

          <p
            class="text-gray-700 mt-2 leading-relaxed text-justify"
          >He is co-founder of SphereRays Technolabs Pvt. Ltd. He has 10+ years of experience of shaping core ideas into architectural development and implementation.He as authored a book called Learning Laravel 4 Application Development which includes the best practices in the Laravel application development.</p>
        </div>

        <!-- <div class="w-full lg:w-1/2 lg:px-16 mt-16 lg:mt-0">
          <h6 class="uppercase text-sm text-gray-700 font-semibold tracking-wider">&nbsp;</h6>
          <div class="w-full md:flex md:flex-row lg:flex-col md:-mx-4 lg:mx-0">
            <h2
              class="text-3xl font-semibold leading-tight mt-6"
            >Laravel Vapor: Serverless magic for PHP</h2>
            <h2 class="text-xl font-medium leading-tight mt-6">
              <img slot="icon" src="https://avatars.io/twitter/diku_patel" class="avatar rounded" />
              by
              <a
                href="https://twitter.com/diku_patel"
                target="_blank"
              >Chintan Banugaria</a>
            </h2>

            <p
              class="text-gray-700 mt-2 leading-relaxed text-justify"
            >He is full stack developer / director at Emrys Technologies having experience of more than 8+ years. He will talk about the newly introduce Laravel Vapor, a serverless platform for the Laravel applications. He will briefly introduce the core concepts of Serverless and deploy a demo application on the vapor.</p>
          </div>
        </div> -->
        <div
          class="flex w-full md:w-1/2 lg:w-full md:mx-4 lg:mx-0 mt-12 md:mt-0 lg:mt-12 text-center justify-center"
        >
          <a
            href="https://allevents.in/rajkot/laravel-rajkot-meetup-october-2019/80002416250362"
            class="inline-block bg-laracolor hover:bg-laracolor text-white pl-4 pr-2 py-2 lg:py-3 lg:pl-5 lg:pr-4 font-bold rounded-lg mt-8 shadow-md hover:shadow-lg"
            style="height:max-content;"
            target="_blank"
          >
            <div class="flex items-center">
              <span>Book Tickets</span>
              <div class="w-8 h-8 bg-white text-laracolor text-center rounded-lg p-1 ml-4">
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
      <div
        class="w-full lg:w-1/4 flex flex-wrap bg-laracolor text-white py-20 px-4 lg:px-10 lg:flex-row justify-center text-center"
      >
        <!-- <div class="w-full flex flex-col">
          <h4
            class="font-normal font-bold text-white text-xl leading-relaxed tracking-wider"
          >Schedule</h4>
          <div
            class="flex items-center inline-block bg-white hover:bg-white text-laracolor py-3 pl-4 pr-2 lg:py-3 lg:pl-5 lg:pr-4 font-bold rounded-lg mt-6 shadow-md hover:shadow-lg text-center justify-center dotted"
          >
            <span>
              09:00 am - 09:30 am
              <br />
              <span class="text-headerdark">Registration</span>
            </span>
          </div>

          <div
            class="flex items-center inline-block bg-white hover:bg-white text-laracolor py-3 pl-4 pr-2 lg:py-3 lg:pl-5 lg:pr-4 font-bold rounded-lg mt-6 shadow-md hover:shadow-lg text-center justify-center"
          >
            <span>
              10:00 am - 11:00 am
              <br />
              <span class="text-headerdark">Laravel Core: Dependency Injections and Containers</span>
            </span>
          </div>
          <div
            class="flex items-center inline-block bg-white hover:bg-white text-laracolor py-3 pl-4 pr-2 lg:py-3 lg:pl-5 lg:pr-4 font-bold rounded-lg mt-6 shadow-md hover:shadow-lg text-center justify-center"
          >
            <span>
              11:00 am - 11:30 am
              <br />
              <span class="text-headerdark">Break</span>
            </span>
          </div>
          <div
            class="flex items-center inline-block bg-white hover:bg-white text-laracolor py-3 pl-4 pr-2 lg:py-3 lg:pl-5 lg:pr-4 font-bold rounded-lg mt-6 shadow-md hover:shadow-lg text-center justify-center"
          >
            <span>
              11:30 am - 12:30 am
              <br />
              <span class="text-headerdark">Laravel Vapor: Serverless magic for PHP</span>
            </span>
          </div>
          <div
            class="flex items-center inline-block bg-white hover:bg-white text-laracolor py-3 pl-4 pr-2 lg:py-3 lg:pl-5 lg:pr-4 font-bold rounded-lg mt-6 shadow-md hover:shadow-lg text-center justify-center"
          >
            <span>
              12:30 am - 1:30 am
              <br />
              <span class="text-headerdark">Q and A (open house)</span>
            </span>
          </div>
          <div
            class="flex flex-col items-center inline-block text-white py-3 pl-4 pr-2 lg:py-3 lg:pl-5 lg:pr-4 font-bold rounded-lg mt-6 text-center justify-center"
          >
            <span class="pl-2 flex-row flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-map-pin align-text-top pr-2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              RKU City Campus
            </span>
            2nd Ring Rd,
            <br />Mota Mava,
            <br />Rajkot, Gujarat 360005
          </div>
          <div
            class="flex flex-col items-center inline-block text-white py-3 pl-4 pr-2 lg:py-3 lg:pl-5 lg:pr-4 font-bold rounded-lg mt-6 text-center justify-center"
          >
            <span class="pl-2 flex-row flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-map-pin align-text-top pr-2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Sunday, 20 October 2019
            </span>
          </div>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
import Header from "~/layouts/header.vue";
import { getLiveEvents } from '~/static/js/events.js'
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
      store.commit('liveEvents', events);
    }
  }
};
</script>

<style>
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