<template>
  <div id="app">
    <adminHeader></adminHeader>
    <div class="demo-split">
      <Split v-model="split" min="200px" max="200px">
        <div slot="left" class="demo-split-left">
          <leftNav :items="items" ></leftNav>
        </div>
        <div slot="right" class="demo-split-pane demo-split-right">
          <adminContent></adminContent>
        </div>
      </Split>
    </div>
  </div>
</template>

<script>
import adminHeader from "./views/header.vue";
import leftNav from "./views/menuContainer.vue";
import adminContent from "./views/adminContent.vue";
export default {
  name: "app",
  data() {
    return {
      split: .1,
      items: [
        {
          id: "btn_homework_manage",
          icon_class: "btn-homework-manage",
          text: "数据分析",
          router: {
            path: "/dataAnalysis",
            name: "dataAnalysis",
            homepagename: "dataAnalysis"
          },
          index: "0",
          hasSubMenu: false
        },
        {
          id: "btn_account_manage",
          icon_class: "btn-account-manage",
          text: "基础管理",
          index: "1",
          hasSubMenu: true,
          submenus: [
            {
              id: "btn_user_manage",
              icon_class: "btn-user-manage",
              text: "用户管理",
              router: {
                path: "/userManage",
                name: "userManage",
                homepagename: "userManage"
              },
              index: "1-1"
            },
            {
              id: "btn_teacher_manage",
              icon_class: "btn-teacher-manage",
              text: "电影管理",
              router: {
                path: "/movieManage",
                name: "movieManage",
                homepagename: "movieManage"
              },
              index: "1-2"
            }
          ]
        }
      ]
    }
  },
  components: {
    adminHeader,
    leftNav,
    adminContent
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/index.scss";

#app{
  position: relative;
}

.demo-split-left{
  width: 200px;
  height: 100vh;
  background: #515a6e;
}
.demo-split {
  height: 100vh;
  padding-top: 50px;
  // border: 1px solid #dcdee2;
}
.demo-split-pane {
  padding: 0 10px;
}
</style>
