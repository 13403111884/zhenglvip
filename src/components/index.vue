<template>
  <div>
    <div class="demo-split">
      <Split v-model="split" min="200px" max="200px">
        <div slot="left" class="demo-split-left">
          <MenuContainer />
        </div>
        <div slot="right" class="demo-split-pane demo-split-right">
          <AdminHeader />
          <router-view></router-view>
        </div>
      </Split>
    </div>
  </div>
</template>

<script>
import AdminHeader from "./adminHeader"
import MenuContainer from "./menuContainer"
export default {
  name: "menurouter",
  components: { AdminHeader, MenuContainer },
  data() {
    return {
      split: 0.1,
    }
  },
  components: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.demo-split-left{
  width: 200px;
  height: 100vh;
  background: #515a6e;
}
.demo-split {
  height: 100vh;
  // border: 1px solid #dcdee2;
}
.demo-split-pane {
  padding: 0 10px;
}
</style>