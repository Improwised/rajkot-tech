<template>
  <div>
    <Social />
    <Navbar />
    <header class="past-meetup-title py-5rem">
      <h2 class="text-center tu fb m-0">past meetup</h2>
    </header>
    <CF />
    <Chapter :name="$route.params.type" :data="$store.getters.events"></Chapter>
    <Footer />
  </div>
</template>

<script>
import Social from '~/components/layout/Social.vue'
import Navbar from '~/components/layout/Navbar.vue'
import Footer from '~/components/layout/Footer.vue'

import { getChapterPastMeetup, getRoutes } from '~/static/js/events.js'
import Chapter from '~/components/past-meetup/Chapter.vue'
import CF from '~/components/past-meetup/Filter.vue'

export default {
  components: {
    Social,
    Navbar,
    Footer,

    CF,
    Chapter
  },

  async asyncData({ app, store, params }) {
    if (process.server) {
      store.commit('events', [])
      const events = await getChapterPastMeetup(params.type)
      store.commit('events', events)
      const routes = await getRoutes()
      store.commit('routes', routes)
    }
  },

  head() {
    return {
      title: 'Past Meetup | Rajkot Tech'
    }
  }
}
</script>

<style>
.past-meetup-title {
  background-image: linear-gradient(-225deg, #e3fdf5 0%, #ffe6fa 100%);
}
</style>
