<template>
  <div id="app">
    <header class="header">
      <router-link to="/home">Home</router-link>
      <router-link to="/list">List</router-link>
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <my-footer></my-footer>
  </div>
</template>
<script>
import MyFooter from './components/footer.vue'
export default {
  components: {
    MyFooter
  }
}
</script>
<style lang="stylus">

</style>