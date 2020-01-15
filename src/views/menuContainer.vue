<template>
  <div>
    <Menu
      theme="dark"
      :active-name="activeIndex"
      :open-names="['0']"
      width='auto'
    >
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
    items: {
      type: Array
    }
  },
  methods: {}
}
</script>
