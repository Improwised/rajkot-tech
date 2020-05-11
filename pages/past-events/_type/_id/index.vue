<template>
  <div>
    <Header></Header>
    <div style="margin-top: 139px">
      <no-ssr>
    <Event :name="$route.params.id" :data="$store.getters.event"></Event>
      </no-ssr>
    </div>
  </div>
</template>
<script>
import Header from '../../../../layouts/header.vue'
import Event from "../../../../components/past-events/Layout/Event.vue";
import { getEventDetails } from "../../../../static/js/events.js";
export default {
  components: {
    Event,
    Header
  },
  async asyncData({ app, store, params }) {
    if (process.server) {
      store.commit("event", []);
      let events = await getEventDetails(params);
      console.log('11111111111111', events)
      store.commit("event", events);
    }
  }
};
</script>