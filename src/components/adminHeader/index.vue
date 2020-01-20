<template>
  <div class="admin-head__top">
    <span @click="collapsedSider" :class="rotateIcon" >展开</span>
    <a class="admin-head__setting">
      <img class="admin-head__img" src="@img/logout.png" />
      <span>退出</span>
    </a>
    <a class="admin-head__password">
      <img class="admin-head__img" src="@img/key.png" />
      <span>修改密码</span>
    </a>
    <span class="admin-head__wel">欢迎您，系统管理员！</span>
  </div>
</template>

<script>
export default {
  name: "AdminHeader",
  props: { isCollapsed: { type: Boolean } },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    }
  },
  methods: {
    collapsedSider() {
      this.$emit("collapsedSider");
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "@css/mixins/_admin-head.scss";
// @include admin-head(admin-head);

.admin-head {
  &__top {
    overflow: hidden;
    border-bottom: 1px solid #ccc;
  }
  &__setting {
    float: right;
    padding: 0 20px 0 10px;
    border-left: 1px solid #e8e8e8;
    cursor: pointer;

    display: block;
    color: #666;
  }

  &__img {
    margin: 22px 5px 0 0;
    float: left;
  }

  &__password {
    cursor: pointer;
    float: right;
    color: #666;
    padding: 0 20px 0 10px;
    border-left: 1px solid #e8e8e8;
  }

  &__wel {
    float: right;
  }
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
</style>
