<template>
  <div>
    <div>电影类别统计</div>
    <div id="dataBar">
      <img :src="item" v-for="(item, index) of analysisList" :key="index" />
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import { mapGetters } from "vuex";
export default {
  asyncData({ store }) {
    return store.dispatch("getAnalysis").then(function() {});
  },
  computed: {
    ...mapGetters(["analysisList"])
  }
};
</script>
