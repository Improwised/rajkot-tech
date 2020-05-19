<template>
  <div>
    <Social />
    <Navbar />
    <HeroUnit :event="event" />
    <About :event="event" />
    <Schedule :event="event" />
    <Speakers :event="event" />
    <Ticket :event="event" />
    <Venue :event="event" />
    <Volunteers :event="event" />
    <Footer />
  </div>
</template>

<script>
import { getEventDetails } from '~/static/js/events.js'

import Social from '~/components/layout/Social.vue'
import Navbar from '~/components/layout/Navbar.vue'
import Footer from '~/components/layout/Footer.vue'

import HeroUnit from '~/components/event/HeroUnit.vue'
import About from '~/components/event/About.vue'
import Schedule from '~/components/event/Schedule.vue'
import Speakers from '~/components/event/Speakers.vue'
import Ticket from '~/components/event/Ticket.vue'
import Venue from '~/components/event/Venue.vue'
import Volunteers from '~/components/event/Volunteers.vue'

export default {
  components: {
    Social,
    Navbar,
    Footer,

    HeroUnit,
    About,
    Schedule,
    Speakers,
    Ticket,
    Venue,
    Volunteers
  },
  async asyncData({ app, store, params }) {
    if (process.server) {
      store.commit('event', [])
      const events = await getEventDetails(params)
      store.commit('event', events.length ? events[0] : {})
    }
  },
  computed: {
    event() {
      return this.$store.getters.event
    }
  },
  head() {
    return {
      title: `${
        this.event && this.event.name ? `${this.event.name} | ` : ''
      }meetup | Laravel Rajkot`
    }
  }
}
</script>
