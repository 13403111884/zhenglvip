<template>
  <div id="home">
    这是 HOME 页
  </div>
</template>
<script>
import { init } from '../api/home'
import { mapGetters } from 'vuex'
export default {
  // 服务端路由进来时，就会触发这个函数
  // 触发请求，服务端获取数据，存到vuex中
  asyncData({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('getAllData')
  },
  name: 'home',
  title: 'Home',
  data() {
    return {
      introduction: 'sssss'
    }
  },
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'totalRegister',
      'topMouthActiver'
    ]),
    totalActiver() {
      return this.$store.getters.totalActiver
    },
    todayLogin() {
      return this.$store.getters.todayLogin
    }
  }
}
</script>

<style scoped lang="stylus">
</style>