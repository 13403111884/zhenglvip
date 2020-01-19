<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return { 
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/index.scss";

#app{
  position: relative;
}

</style>
