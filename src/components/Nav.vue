<template>
  <nav>
    <router-link class="item" to="/money">
      <Icon name="dollar"></Icon>记账
    </router-link>
    <router-link class="item" to="/labels">
      <Icon name="label"></Icon>标签
    </router-link>
    <router-link class="item" to="/statistics">
      <Icon name="statistic"></Icon>统计
    </router-link>
  </nav>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  font-size: 12px;
  .item {
    width: 33.3333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2px 0;
    .icon {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
