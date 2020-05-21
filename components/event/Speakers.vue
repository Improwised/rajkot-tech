<template>
  <div v-if="event.agenda && event.agenda.length" class="speaker-info py-5rem">
    <h2 class="text-center tu fb mb-5">speakers</h2>
    <div class="speaker d-flex justify-content-center">
      <b-card
        v-for="(agenda, index) in event.agenda"
        :key="index"
        :title="agenda.speaker && agenda.speaker.name"
        :img-src="
          agenda.twitter.image
            ? agenda.twitter.image
            : 'https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094701-stock-illustration-businessman-profile-icon.jpg'
        "
        :img-alt="agenda.speaker && agenda.speaker.name"
        img-top
        style="max-width: 20rem;"
        class="m-5"
      >
        <b-card-text>
          {{ agenda.speaker && agenda.speaker.about }}
        </b-card-text>

        <div class="text-center">
          <a :href="agenda.twitter && agenda.twitter.profile" target="_blank">
            <svg
              viewBox="0 0 24 24"
              style="fill: rgba(29,161,242,1.00)"
              height="32"
            >
              <g>
                <path
                  d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
                ></path>
              </g>
            </svg>
          </a>
        </div>
      </b-card>
      <!--  -->
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
.speaker-info {
  background-color: #f5f5f5;
}

.speaker .card {
  border-radius: 15px;
  box-shadow: 1px 5px 20px #bbb;
}

.speaker .card img {
  border-radius: 15px;
}
</style>
