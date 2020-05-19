<template>
  <div
    class="chapters-links d-flex align-items-center justify-content-center my-5"
  >
    <a href="/past-meetup">All</a
    ><a
      v-for="(item, key, index) in $store.getters.routes"
      :key="index"
      :href="'/past-meetup/' + item"
      >{{ item }}</a
    >
  </div>
</template>

<style>
.chapters-links a {
  margin: 5px;
  color: #707070;
  line-height: 1;
  font-weight: bold;
  padding: 10px 30px;
  text-decoration: none;
  text-transform: uppercase;
  border: 2px solid #707070;
}
</style>
