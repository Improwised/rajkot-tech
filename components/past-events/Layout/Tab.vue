<template>
  <div>
      <div class="col-sm-12 blog_categories">
        <a class="blog_category active" href="past-events">
          All
        </a> 
        <a :href=" 'past-events/' + item" class="blog_category" v-for="(item, key, index) in $store.getters.routes" :key="index">
         {{item}}
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
    /* background-color: transparent; */
    border: 1px solid #c1bbbb;
    font-weight: 400;
    border-radius: 3px;
    font-weight: bold;
    font-size: 1.3rem;
    text-transform: capitalize;
    margin: 0.3125rem;
    align-items: center;
}
a:not([href]):hover {
  color: #fff;
  text-decoration: none;
}
a:active {
  background: #15192c;
  color:#fff;
}
</style>