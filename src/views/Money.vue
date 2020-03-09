<template>
  <div>
    <Layout class-prefix="layout">
      <number-pad></number-pad>
      <types :propMessage="12"></types>
      <notes></notes>
      <tags :data-source.sync="tags"></tags>
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
    Notes,
    Tags,
    Types
  },
  data() {
    return {
      tags: ["衣", "食", "住", "行"]
    };
  }
});
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
</style>
