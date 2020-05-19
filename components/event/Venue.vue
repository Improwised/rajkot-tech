<template>
  <div
    v-if="event.venue"
    class="bk-map d-flex justify-content-center align-items-center"
  >
    <div class="venue">
      <h2 class="text-center tu fb mb-5">venue</h2>
      <address class="text-center">
        <h2 class="tc">{{ event.venue.place }}</h2>
        {{ event.venue.address }}
      </address>
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
.bk-map {
  background-size: cover;
  background-position: center center;
  background-image: url('~assets/images/rajkot.png');
}

.venue {
  width: 100%;
  color: white;
  padding: 5rem;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
