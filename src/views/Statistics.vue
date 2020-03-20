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
import Tabs from "@/components/Tabs.vue";
import { Component } from "vue-property-decorator";
import { intervalList } from "@/enums/constants/intervalList";
import { typeList } from "@/enums/constants/recordTypeList";
@Component({
  components: { Tabs }
})
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  intervalList = intervalList;
  typeList = typeList;
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
::v-deep .interval-tabs-item {
  height: 48px;
}
</style>
