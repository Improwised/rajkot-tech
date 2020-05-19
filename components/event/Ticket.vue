<template>
  <div v-if="event && event.live" class="tickets py-5">
    <b-container>
      <b-row class="justify-content-center">
        <b-col class="d-flex justify-content-between align-items-center">
          <h2 class="text-center tu fb m-0">reserve your seat</h2>
          <b-button size="lg" class="get-tickets" variant="warning" squared>
            get tickets
          </b-button>
        </b-col>
      </b-row>
    </b-container>
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
.tickets {
  background-image: linear-gradient(
    to top,
    #f3e7e9 0%,
    #e3eeff 99%,
    #e3eeff 100%
  );
}
</style>
