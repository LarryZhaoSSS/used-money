<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";
body {
  line-height: 1.5;
  font-family: $font-hei;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-size: 16px;
}
</style>
