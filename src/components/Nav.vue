<template>
  <div class="nav">
    <router-link to="/money">
      <Icon name="dollar"></Icon>记账
    </router-link>|
    <router-link to="/labels">
      <Icon name="label"></Icon>标签
    </router-link>|
    <router-link to="/statistics">
      <Icon name="statistic"></Icon>统计
    </router-link>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style lang="scss" scoped>
.nav {
}
</style>
