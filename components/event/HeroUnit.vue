<template>
  <div class="event-hero-unit">
    <div
      class="event-background"
      :style="{
        'background-image': `url(${
          event && event.coverimage ? event.coverimage : '/images/cover-bg.jpg'
        })`
      }"
    >
      <div
        class="event-hero-unit-content d-flex align-items-center justify-content-center"
      >
        <div class="text-center">
          <div class="rt-branding mt-5">
            <h4 class="fb">RAJKOT TECH</h4>
          </div>
          <h4
            v-if="(event && event.live) || $route.name !== 'index'"
            class="tu"
          >
            {{ event && event.type ? event.type : 'meetup' }}
          </h4>
          <!-- <h4
            v-else-if="event && !event.live && $route.name !== 'index'"
            class="next-meetup"
          >
            PAST MEETUP
          </h4> -->
          <h1 v-if="event && event.name" class="meetup-name tu fb">
            {{ event && event.name }}
          </h1>
          <div class="date-time">
            <time class="tu">{{ event && event.date }}</time>
            <address>{{ event && event.venue && event.venue.place }}</address>
          </div>
          <div>
            <a
              v-if="event && event.live && $route.name === 'index'"
              :href="event && event.event_details_url"
              target="_blank"
            >
              <b-button
                size="lg"
                class="get-tickets tu fb mb-5"
                variant="warning"
                squared
              >
                get tickets
              </b-button>
            </a>
          </div>
          <b-badge
            v-if="event && !event.live && $route.name !== 'index'"
            pill
            variant="danger"
            class="py-2 px-3 event-end"
            >Event Ended</b-badge
          >
          <!-- <div
            v-if="event && !event.live && $route.name !== 'index'"
            class="attandence d-flex align-items-center justify-content-center my-5"
          >
            <div class="registrations m-3 p-3 text-center">
              <h4 class="m-0">{{ event && event.registrations }}</h4>
              <label class="m-0 tu">Registrations</label>
            </div>
            <div class="attendies m-3 p-3 text-center">
              <h4 class="m-0">{{ event && event.attendies }}</h4>
              <label class="m-0 tu">Attendies</label>
            </div>
          </div> -->
          <div>
            <a
              v-if="event && !event.live && $route.name !== 'index'"
              :href="event && event.event_details_url"
              target="_blank"
            >
              <b-button
                size="lg"
                class="view-more tu fb mb-5"
                variant="warning"
                squared
              >
                view details
              </b-button>
            </a>
          </div>

          <!--  -->

          <div
            v-if="event && !event.live && $route.name === 'index'"
            class="submit-talk"
          >
            <p>
              We will be announcing our next meetup / workshop soon. Meanwhile,
              if you want to speak on a topic or want to take workshop
              <a href="https://forms.gle/DHHBgtPjTd5Gm4hL6" target="_blank"
                ><b-badge variant="warning">submit your proposal</b-badge></a
              >
              else if you want to request a workshop or a talk on a specific
              topic
              <a href="https://forms.gle/R1P5nUsSZVWVThwx7" target="_blank"
                ><b-badge variant="warning">let us know</b-badge></a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>
.event-background {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.event-hero-unit-content {
  width: 100%;
  color: white;
  height: fit-content;
  background-color: #000000b3;
  min-height: calc(100vh - 98px);
}

.rt-branding {
  padding: 15px;
  margin-bottom: 5rem;
  display: inline-block;
  border: 3px solid white;
}

.rt-branding h4 {
  margin: 0;
  color: white;
  font-size: 1.1rem;
  display: inline-block;
}

.meetup-name {
  font-size: 3rem;
}

.date-time {
  margin-top: 1.5rem;
}

.date-time time {
  font-size: 2rem;
}

.date-time address {
  font-size: 1.2rem;
}

.get-tickets,
.view-more {
  padding: 0.5rem 4rem;
}

.event-hero-unit-content .event-end {
  margin-bottom: 3rem;
}

.submit-talk {
  margin: 0 15px;
  max-width: 500px;
  font-size: 1.1rem;
}

/*.attandence .registrations,
.attandence .attendies {
  color: black;
  width: 162px;
  border-radius: 15px;
  background-color: #f5f5f5b3;
}*/
</style>
