<template>
  <div>
    <Header></Header>
    <Faq></Faq>
  </div>
</template>
<script>
import Header from "~/layouts/header.vue";
import Faq from "~/components/Faq/Index.vue";
export default {
  components: {
    Faq,
    Header
  }
};
</script>