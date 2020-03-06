<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot></slot>
    </div>

    <Nav></Nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "lay-out"
});
</script>
<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  overflow: auto;
  flex-grow: 1;
}
</style>