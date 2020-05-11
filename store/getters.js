export default {
  event: state => {
    return state && state.event
      ? state.event
      : null;
  },
  pastEvents: state => {
    return state && state.pastEvents
      ? state.pastEvents
      : null;
  },
  routes: state => {
    return state && state.routes
      ? state.routes
      : null;
  },
  events: state => {
    return state && state.events
      ? state.events
      : null;
  },
  liveEvents: state => {
    return state && state.liveEvents
      ? state.liveEvents
      : null;
  }
};
