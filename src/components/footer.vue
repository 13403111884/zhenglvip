<template>
  <footer id="footer">
    页脚
  </footer>
</template>
<script>
  export default {
    name: 'MyFooter',
    created() {
      this.nowYear = new Date().getFullYear()
    }
  }
</script>
<style scoped lang="stylus">
  #footer
    font-size 34px
</style>
