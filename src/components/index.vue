<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider
        collapsible
        v-model="collapsed"
        hide-trigger
        breakpoint="sm"
        class="layout-Menu"
      >
        <SideMenu :collapsed="collapsed" :list="menuList" />
      </Sider>
      <Layout>
        <Header class="layout-header">
          <Head @handleCollapsed="handleCollapsed" :collapsed="collapsed" />
        </Header>
        <Content class="layout-content">
          <router-view class="layout-content-view"/>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import Head from '@components/head'
import SideMenu from '@components/menuContainer'
export default {
  components: {
    SideMenu,
    Head
  },
  data () {
    return {
      collapsed: true,
      menuList: [
        {
          title: '111',
          name: 'menu1',
          icon: 'md-analytics'
        },
        {
          title: '222',
          name: 'menu2',
          icon: 'md-analytics'
        },
        {
          title: '333',
          name: 'menu3',
          icon: 'md-appstore',
          children: [
            {
              title: '333-111',
              name: 'menu31',
              icon: 'md-apps'
            },
            {
              title: '333-222',
              name: 'menu32',
              icon: 'md-apps',
              children: [
                {
                  title: '333-222-111',
                  name: 'menu321',
                  icon: 'ios-archive'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleCollapsed () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>
<style lang="scss" scoped>
/deep/ .ivu-layout-sider-children {
  overflow-y: auto !important;
  padding-bottom: 80px;
}
.layout-wrapper,
.layout-outer {
  height: 100%;
  .layout-Menu{
    height: 100vh;
  }
  .layout-header {
    background: #fff;
    padding: 0;
  }
  .layout-content {
    background-color: #fff;
    margin: 6px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, .1);
    .page-card {
      min-height: "calc(100vh - 84px)";
    }
  }
}
</style>