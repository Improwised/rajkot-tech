<template>
  <div class="social">
    <div class="d-flex align-items-center justify-content-between">
      <div>Stay Connected</div>
      <SocialPlatforms />
    </div>
  </div>
</template>

<script>
import SocialPlatforms from '~/components/layout/SocialPlatforms.vue'

export default {
  components: {
    SocialPlatforms
  }
}
</script>

<style>
.social {
  color: #606060;
  padding: 0.5rem 1rem;
  background-color: #eee;
}
</style>
