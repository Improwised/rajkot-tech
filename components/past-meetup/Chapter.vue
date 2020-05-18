<template>
  <div class="past-meetup-list pt-5">
    <b-container>
      <b-row class="justify-content-center">
        <b-col md="6">
          <div
            v-for="(value, key, index) in data"
            :key="index"
            class="past-meetup bl5 bs-ccc mb-5 d-flex align-items-center"
          >
            <div
              class="past-meetup-category-icon p-3 d-flex align-items-center justify-content-center"
            >
              <img
                :src="getCoverImage(value.coverimage, value.categories[0])"
              />
            </div>
            <div class="past-meetup-details flex-fill p-3">
              <time class="past-meetup-date tu">{{ value.date }}</time>
              <h5 class="past-meetup-name tc fb">{{ value.name }}</h5>
              <div class="text-left mt-3">
                <a
                  :href="
                    '/past-meetup/' + value.categories[0] + '/' + value.fileName
                  "
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import laravel from '@/chapter/laravel.json'
import seo from '@/chapter/seo.json'
import vue from '@/chapter/vue.json'
import docker from '@/chapter/docker.json'

export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getCoverImage(img, category) {
      if (img === '') {
        switch (category) {
          case 'laravel':
            return require(`@/assets/images/` + laravel.default_img)
          case 'vue':
            return require(`@/assets/images/` + vue.default_img)
          case 'docker':
            return require(`@/assets/images/` + docker.default_img)
          case 'seo':
            return require(`@/assets/images/` + seo.default_img)
        }
      } else {
        return img
      }
    }
  }
}
</script>

<style>
.past-meetup-list {
  background-color: #f5f5f5;
}

.past-meetup {
  background-color: white;
  border-radius: 15px;
}

.past-meetup .past-meetup-category-icon {
  height: 100px;
  width: 100px;
}

.past-meetup .past-meetup-category-icon img {
  max-width: 100%;
  max-height: 100%;
}

.past-meetup .past-meetup-details .past-meetup-date {
  font-size: 13px;
}
</style>
