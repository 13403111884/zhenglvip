<template>
  <div>
    <Menu theme="dark" :active-name="activeIndex" :open-names="['0']" width="auto">
      <Submenu
        v-if="item.hasSubMenu"
        v-for="(item,index) in items"
        :name="String(item.index)"
        :key="index"
      >
        <template slot="title">
          <i :class="'com-menuContainer__'+item.icon_class"></i>
          {{item.text}}
        </template>
        <MenuItem
          v-for="(submenu,index) in item.submenus"
          :key="index"
          :to="submenu.router.path"
          :name="String(submenu.index)"
        >
          <i class="com-menuContainer__submenu-icon"></i>
          {{submenu.text}}
        </MenuItem>
      </Submenu>
      <MenuItem v-else :name="String(index)" :to="item.router.path">
        <i :class="'com-menuContainer__'+item.icon_class"></i>
        {{item.text}}
      </MenuItem>
    </Menu>
  </div>
</template>

<script>
export default {
  name: "menurouter",
  data() {
    return {
      activeIndex: "0-1",
      items: [
        {
          id: "btn_homework_manage",
          icon_class: "btn-homework-manage",
          text: "数据分析",
          router: {
            path: "/home/dataAnalysis",
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
                path: "/home/userManage",
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
                path: "/home/movieManage",
                name: "movieManage",
                homepagename: "movieManage"
              },
              index: "1-2"
            }
          ]
        }
      ]
    };
  },
  components: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "./../../assets/img-path.scss";
@import "./../../assets/menuContainer.scss";
</style>
