<template>
  <div class="Header">
    <Icon
      class="menu-wrapper"
      type="md-menu"
      :size="32"
      @click.native="handleCollapsed"
      :class="triggerClasses"
    />
    <Poptip class="user" placement="bottom-end" width="81">
      <div class="userName">
        <Icon type="md-contact" /> 用户
      </div>
      <ul class="menu-content" slot="content">
        <li>
          <Icon type="md-settings" />设置
        </li>
        <li>
          <Icon type="md-power" />退出
        </li>
      </ul>
    </Poptip>
    
  </div>
</template>

<script>
export default {
  name: "Header",
  props: { collapsed: { type: Boolean } },
  computed: {
    triggerClasses() {
      return ["trigger-icon", this.collapsed ? "rotate" : ""];
    }
  },
  methods: {
    handleCollapsed() {
      this.$emit("handleCollapsed");
    }
  }
};
</script>

<style lang="scss" scoped>
.Header {
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
.menu-wrapper {
  padding: 14px;
  float: left;
}
.fr{ float: right; }
.user {
  float: right;
  font-size: 18px;
  margin-right: 20px;
  cursor: pointer;
  &:hover .userName {
    color: #2d8cf0;
  }
  .userName {
    height: 50px;
    text-align: center;
  }
  .menu-content {
    li{
      line-height: 36px;
      border-bottom: 1px solid #cccccc;
      &:hover{
        color: #2d8cf0;
      }
    }
  }
}
.trigger-icon {
  cursor: pointer;
  transition: transform 0.3s ease;
  &.rotate {
    transform: rotateZ(-90deg);
    transition: transform 0.3s ease;
  }
}
</style>
