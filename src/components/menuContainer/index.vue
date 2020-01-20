<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu width="auto" theme="dark" v-show="!collapsed" @on-select="handleSelect">
      <template v-for="item in list">
        <ReSubmenu
          v-if="item.children"
          :key="`menu_${item.name}`"
          :name="item.name"
          :parent="item"
        >
          <menu-item></menu-item>
        </ReSubmenu>
        <menu-item v-else :key="`menu_${item.name}`" :name="item.name">
          <Icon :type="item.icon"/>
          {{ item.title }}
        </menu-item>
      </template>
    </Menu>
    <div class="drop-wrapper" v-show="collapsed">
      <template v-for="item in list">
        <ReDropdown @on-select="handleSelect" v-if="item.children" icon-color="#fff" :show-title="false" :key="`drop_${item.name}`" :parent="item" />
        <span :title="item.title" v-else :key="`drop_${item.name}`" @click="handleClick(item.name)" class="drop-menu-span">
          <Icon :type="item.icon" color="#fff" :size="30"/>
        </span>
      </template>
    </div>
  </div>
</template>
<script>
import ReSubmenu from './modules/re-submenu'
import ReDropdown from './modules/re-dropdown'
export default {
  name: 'SideMenu',
  components: {
    ReSubmenu,
    ReDropdown
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleSelect (name) {
      console.log(name)
    },
    handleClick (name) {
      console.log(name)
    }
  }
}
</script>
<style lang="scss">
.side-menu-wrapper {
  overflow-y: auto;
  .ivu-tooltip,
  .drop-menu-span {
    display: block;
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }
  .drop-wrapper > .ivu-dropdown {
    display: block;
    padding: 10px;
    margin: 0 auto;
  }
}
</style>
