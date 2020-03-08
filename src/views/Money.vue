<template>
  <div>
    <Layout class-prefix="layout">
      <number-pad></number-pad>
      <types></types>
      <notes></notes>
      <tags></tags>
    </Layout>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/money/number-pad.vue";
import Types from "@/components/money/Types.vue";
import Notes from "@/components/money/Notes.vue";
import Tags from "@/components/money/Tags.vue";
export default Vue.extend({
  name: "money",
  components: {
    NumberPad,
    Types,
    Notes,
    Tags
  }
});
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
  border: 3px solid red;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
</style>
