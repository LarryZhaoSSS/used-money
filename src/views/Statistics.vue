<template>
  <div class="statistics">
    <Layout>
      <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"></Tabs>
      <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"></Tabs>
      <ol>
        <li v-for="(group,index) in result" :key="index">
          {{group}}
          <h3 class="title">{{group.title}}</h3>
          <ol>
            <li class="record" v-for="item in group.items" :key="item.id">
              <span>{{tagString(item.tags)}}</span>
              <span class="notes" :style="{marginRight:'auto'}">{{item.notes}}</span>
              <span>${{item.amount}}</span>
            </li>
          </ol>
        </li>
      </ol>
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
  tagString(tags: Tag[]) {
    return tags.length === 0 ? "无" : tags.join(",");
  }
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  get result() {
    const { recordList } = this;
    type HashTableValue = { title: string; items: RecordItem[] };
    const hashTable: { [key: string]: HashTableValue } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createdAt!.split("T");
      hashTable[date] = hashTable[date] || { title: date, items: [] };
      hashTable[date].items.push(recordList[i]);
    }
    return hashTable;
  }
  type = "-";
  interval = "day";
  intervalList = intervalList;
  typeList = typeList;
  beforeCreate() {
    this.$store.commit("fetchRecords");
  }
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
%item {
  padding: 6px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  @extend %item;
}
.record {
  background: #fff;
  @extend %item;
}
.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}
</style>
