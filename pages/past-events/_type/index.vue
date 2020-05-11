
  <template>
  <div>
    <Header></Header>
    <div style="margin-top: 139px">
      <no-ssr>
      <Tab></Tab>
      <Chapter :name="$route.params.type" :data="$store.getters.events"></Chapter>
    </no-ssr>
    </div>
  </div>
</template>
<script>
import Header from "~/layouts/header.vue";
import { getAllEvents, getRoutes } from "~/static/js/events.js";
import Chapter from "~/components/past-events/Layout/Chapter.vue";
import Tab from '~/components/past-events/Layout/Tab.vue'
export default {
  components: {
    Header,
    Chapter,
    Tab
  },
  async asyncData({ app, store, params }) {
    if (process.server) {
      store.commit('events', []);
      let events = await getAllEvents(params.type);
      store.commit('events', events);
         let routes = await getRoutes();
      store.commit("routes", routes);
    }
  }
};
</script>
