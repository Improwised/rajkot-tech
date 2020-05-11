import { getAllEvents } from '../static/js/events.js'
export default {
  async nuxtServerInit({ commit }, { req }) {
        let events = await getAllEvents();
        commit('events', events )
    }
}