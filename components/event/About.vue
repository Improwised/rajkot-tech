<template>
  <div v-if="event.about && event.about.length" class="about-meetup py-5rem">
    <h2 class="text-center tu fb mb-5">about</h2>
    <b-container>
      <b-row class="justify-content-center">
        <div class="about-meetup-text">
          <p v-for="(about, index) in event.about" :key="index">
            {{ about }}
          </p>
        </div>
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
.about-meetup {
  background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
}

.about-meetup-text {
  max-width: 505px;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
