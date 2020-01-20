<template>
  <div class="layout">
    <Layout>
      <Sider ref="side" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <MenuContainer></MenuContainer>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <AdminHeader @collapsedSider="collapsedSider" ></AdminHeader>
        </Header>
        <Content
          :style="{margin: '6px', background: '#fff', minHeight: '100vh'}">
          <router-view class="layout-view"></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import AdminHeader from "./adminHeader";
import MenuContainer from "./menuContainer";
export default {
  name: "menurouter",
  components: { AdminHeader, MenuContainer },
  data() {
    return {
      isCollapsed: false
    };
  },
  methods: {
    collapsedSider() {
      this.isCollapsed = !this.isCollapsed
      this.$refs.side.toggleCollapse();
    }
  }
};
</script>
<style lang="scss" scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  &-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }
  &-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  &-view {
    padding: 20px;
  }
}
</style>
