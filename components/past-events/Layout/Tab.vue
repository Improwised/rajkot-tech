<template>
  <div>
      <div class="col-sm-12 blog_categories">
        <a class="blog_category">
          <nuxt-link
            :to="{
            name: 'past-events',
          }"
          >All</nuxt-link>
        </a>
        <a class="blog_category" v-for="(item, key, index) in $store.getters.routes" :key="index">
          <nuxt-link
            :to="{
            name: 'past-events-type',
            params: { type: item }
          }"
          >{{item}}</nuxt-link>
        </a>
      </div>
  </div>
</template>
<script>
export default {

};
</script>
<style >
.blog_categories {
  padding: 1.25rem 0;
  text-align: center;
  border-bottom: 1px solid #efefef;
}
.blog_category {
  color: #595959;
  padding: 0.3125rem 0.625rem;
  display: inline-block;
  background-color: transparent;
  border: 1px solid #595959;
  font-weight: 400;
  border-radius: 3px;
  font-size: 1rem;
  margin: 0.3125rem;
  align-items: center;
}
a:not([href]):hover {
  background: #15192c;
  color: #fff;
  text-decoration: none;
}
</style>