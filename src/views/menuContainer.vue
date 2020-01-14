<template>
  <div>
    <Menu
      mode="vertical"
      :active-name="activeIndex"
      :open-names="['0']"
      style="width:200px; background-color:#162238; color: #fff"
    >
      <Submenu
        v-if="item.hasSubMenu"
        v-for="(item,index) in items"
        :name="String(item.index)"
        :key="index"
      >
        <a :id="item.id" slot="title" :title="item.text">
          <i :class="'com-menuContainer__'+item.icon_class"></i>
          <span v-if="!isclose">{{item.text}}</span>
        </a>
        <MenuItem
          v-for="(submenu,index) in item.submenus"
          :key="index"
          :to="submenu.router.path"
          :name="String(submenu.index)"
        >
          <a
            :id="submenu.id"
            :title="submenu.text"
            :class="{'submenu_open_item':!isclose,'submenu_close_item':isclose}"
          >
            <li class="com-menuContainer__submenu-icon"></li>
            <span>{{submenu.text}}</span>
          </a>
        </MenuItem>
      </Submenu>
      <MenuItem
        v-else
        :name="String(index)"
        :to="item.router.path"
      >
        <a :id="item.id" :title="item.text">
          <i :class="'com-menuContainer__'+item.icon_class"></i>
          <span class="menu_text" v-if="!isclose">{{item.text}}</span>
        </a>
      </MenuItem>
    </Menu>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/img-path.scss";
@import "../assets/menuContainer.scss";
</style>
<script>
export default {
  name: "menurouter",
  data() {
    return {
      activeIndex: "0-1"
    };
  },
  components: {},
  props: {
    isclose: {
      type: Boolean,
      require: false,
      default: false
    },
    items: {
      type: Array
    }
  },
  methods: {
    gotoPage: function(router) {
      let path = { name: router.homepagename };
      this.$router.push(path);
    },
    handleOpen() {
      this.state = "open";
    },

    handleClose() {
      this.state = "closed";
    }
  },
  created() {
    switch (this.$route.name) {
      case "userManage":
        this.activeIndex = "0-1";
        break;
      case "movieManage":
        this.activeIndex = "0-2";
        break;
      case "dataAnalysis":
        this.activeIndex = "1";
        break;
    }
  }
};
</script>
