<template>
  <div>
    <Header></Header>
    <div style="margin-top: 139px;">
      <no-ssr>
      <Tab></Tab>
      <Chapter :name="name" :data="$store.getters.pastEvents"></Chapter>
      </no-ssr>
    </div>
    <nuxt-child />
  </div>
</template>
<script>
<<<<<<< HEAD
import Header from "~/layouts/header.vue";
import { getPastEvents, getRoutes } from "~/static/js/events.js";
import Chapter from "~/components/past-events/Layout/Chapter.vue";
import Tab from '~/components/past-events/Layout/Tab.vue';
=======
import Header from "../../layouts/header.vue";
import { getPastEvents, getRoutes } from "../../static/js/events.js";
import Chapter from "../../components/past-events/Layout/Chapter.vue";
import Tab from '../../components/past-events/Layout/Tab.vue';
>>>>>>> 0c994b10b6cbb9cd202d615bb87bfcbb4d42a074
export default {
  components: {
    Header,
    Tab,
    Chapter,
  },
  data() {
    return {
      name: ""
    };
  },
  async asyncData({ app, store, params }) {
    if (process.server) {
      let pastEvents = await getPastEvents();
      store.commit("pastEvents", pastEvents);
       let routes = await getRoutes();
      store.commit("routes", routes);
    }
  },
  head() {
    return {
      title: "Laravel Rajkot"
    };
  }
};
</script>
