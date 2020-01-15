<template>
  <div
    class="admin-usermg"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
  >
    <div class="admin-usermg__top">电影数据管理</div>
    <div class="admin-usermg__button">
      <Button type="primary" size="mini" @click="handleClick">导入电影数据集</Button>
      <Button type="primary" size="mini" @click="handleClick">新建电影</Button>
      <Button type="primary" size="mini" @click="handleClick">删除电影</Button>
    </div>
    <Table border :columns="columns7" :data="data6"></Table>
  </div>
</template>
<style lang="scss">
@import "../assets/manage.scss";
@import "../assets/el-table.scss";
</style>
<script>
import { mapGetters } from "vuex";
export default {
  // 在路由组件上暴露出一个自定义静态函数 asyncData。
  // 注意，由于此函数会在组件实例化之前调用，所以它无法访问 this
  asyncData({ store }) {
    return store.dispatch("getMovielist").then(function() {});
  },
  data() {
    return {
      showImport: false,
      loading: false,
      columns7: [
        {
          title: "Name",
          key: "name",
          render: (h, params) => {
            return h("div", [
              h("Icon", {
                props: {
                  type: "person"
                }
              }),
              h("strong", params.row.name)
            ]);
          }
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Action",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "View"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "Delete"
              )
            ]);
          }
        }
      ],
      data6: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["movieList"])
  },
  methods: {
    handleClick() {
      console.log("警告哦，该功能还没实现呢！");
    },
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
      });
    },
    remove(index) {
      this.data6.splice(index, 1);
    }
  }
};
</script>
