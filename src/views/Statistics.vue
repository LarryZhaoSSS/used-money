<template>
  <div class="statistics">
    <Layout>
      <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"></Tabs>
      <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"></Tabs>
    </Layout>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Types from "@/components/money/Types.vue";
import Tabs from "@/components/Tabs.vue";
import { Component } from "vue-property-decorator";
@Component({
  components: { Types, Tabs }
})
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  intervalList = [
    { text: "按天", value: "day" },
    { text: "按周", value: "week" },
    { text: "按月", value: "month" }
  ];
  typeList = [
    { text: "支出", value: "-" },
    { text: "收入", value: "+" }
  ];
}
</script>
<style lang="scss" scoped>
::v-deep .type-tabs-item {
  background: #fff;
  &.selected {
    background: #c4c4c4;
    &::after {
      display: none;
    }
  }
}
</style>
