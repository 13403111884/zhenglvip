<template>
  <Menu
    theme="dark"
    :active-name="activeIndex"
    :open-names="['0']"
    width="auto"
    :class="menuitemClasses"
  >
    <Submenu
      v-if="item.hasSubMenu"
      v-for="(item,index) in items"
      :name="String(item.index)"
      :key="index"
    >
      <template slot="title">
        <i :class="'com-menuContainer__'+item.icon_class"></i>
        <span>{{item.text}}</span>
      </template>
      <MenuItem
        v-for="(submenu,index) in item.submenus"
        :key="index"
        :to="submenu.router.path"
        :name="String(submenu.index)"
      >
        <i class="com-menuContainer__submenu-icon"></i>
        <span>{{item.text}}</span>
      </MenuItem>
    </Submenu>
    <MenuItem v-else :name="String(index)" :to="item.router.path">
      <i :class="'com-menuContainer__'+item.icon_class"></i>
      <span>{{item.text}}</span>
    </MenuItem>
  </Menu>
</template>

<script>
export default {
  name: "MenuContainer",
  props: { isCollapsed: { type:Boolean } },
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
  computed: {
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  components: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@css/img-path.scss";

@mixin menu-icon($logo-img) {
  display: inline-block;
  height: 24px;
  width: 24px;
  background: url($logo-img) no-repeat;
}

.com-menuContainer {
  &__btn-account-manage {
    @include menu-icon($logo-home);
  }

  &__btn-homework-manage {
    @include menu-icon($logo-work);
  }

  &__btn-system-setting {
    @include menu-icon($logo-system);
  }

  &__submenu-icon {
    float: left !important;
    height: 30px !important;
    list-style: circle inside !important;
    padding-left: 20px !important;
  }
}
.menu-item {
  span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width 0.2s ease 0.2s;
  }
  i {
    transform: translateX(0px);
    transition: font-size 0.2s ease, transform 0.2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
}
.collapsed-menu {
  span {
    width: 0px;
    transition: width 0.2s ease;
  }
  i {
    transform: translateX(5px);
    transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
    vertical-align: middle;
    font-size: 22px;
  }
}
</style>
