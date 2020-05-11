<<<<<<< HEAD
import { getAllEvents } from '../static/js/events.js'
export default {
  async nuxtServerInit({ commit }, { req }) {
        let events = await getAllEvents();
        commit('events', events )
    }
}
=======
// import { getAllEvents } from '../static/js/events.js'
// export default {
//   async nuxtServerInit({ commit }, { req }) {
//         let events = await getAllEvents();
//         commit('events', events )
//     }
// }
>>>>>>> 0c994b10b6cbb9cd202d615bb87bfcbb4d42a074
