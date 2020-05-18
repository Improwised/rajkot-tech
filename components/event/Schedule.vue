<template>
  <div v-if="event.agenda && event.agenda.length" class="schedule-info py-5rem">
    <h2 class="text-center tu fb mb-5">schedule</h2>
    <div class="schedules-list d-flex justify-content-center">
      <div>
        <div
          v-for="(agenda, index) in event.agenda"
          :key="index"
          class="schedule bl5 bs-ccc d-flex align-items-center mb-5"
        >
          <div
            v-if="agenda.twitter && agenda.twitter.image"
            class="schedule-speaker-image p-3"
          >
            <img
              :src="agenda.twitter.image"
              :alt="agenda.speaker && agenda.speaker.name"
            />
          </div>
          <div class="schedule-details p-3">
            <time v-if="agenda.time">{{ agenda.time }}</time>
            <h5 v-if="agenda.title" class="schedule-topic tc fb">
              {{ agenda.title }}
            </h5>
            <p v-if="agenda.title" class="m-0 name tc">
              by {{ agenda.speaker && agenda.speaker.name }}
            </p>
          </div>
        </div>
        <!--  -->
      </div>
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
.schedules-list {
  margin: 0 auto;
}

.schedule {
  border-radius: 15px;
}

.schedule-speaker-image {
  width: 144px;
}

.schedule-speaker-image img {
  max-height: 112px;
  max-width: 112px;
  border-radius: 15px;
}

.schedule-details {
  max-width: 500px;
}
</style>
