<template>
  <div class="statistics">
    <Layout>
      <Tabs
        class-prefix="type"
        :data-source="typeList"
        :value.sync="type"
      ></Tabs>
      <Tabs
        class-prefix="interval"
        :data-source="intervalList"
        :value.sync="interval"
      ></Tabs>
      <ol>
        <li v-for="(group, index) in groupedList" :key="index">
          <h3 class="title">
            {{ beautify(group.title) }} <span>￥{{ group.total }}</span>
          </h3>
          <ol>
            <li v-for="item in group.items" :key="item.id" class="record">
              <span>{{ tagString(item.tags) }}</span>
              <span class="notes">{{ item.notes }}</span>
              <span>￥{{ item.amount }} </span>
            </li>
          </ol>
        </li>
      </ol>
    </Layout>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Tabs from '@/components/Tabs.vue';
import { Component } from 'vue-property-decorator';
import { intervalList } from '@/enums/constants/intervalList';
import { typeList } from '@/enums/constants/recordTypeList';
import dayjs from 'dayjs';
@Component({
  components: { Tabs }
})
export default class Statistics extends Vue {
  tagString(tags: Tag[]) {
    const result = tags.map(item => item.name).join(',');
    return tags.length === 0 ? '无' : result;
  }
  beautify(string: string) {
    const now = dayjs();
    const day = dayjs(string);
    if (day.isSame(now, 'day')) {
      return '今天';
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (day.isSame(now, 'year')) {
      return day.format('MM-DD');
    } else {
      return day.format('YYYY-MM-DD');
    }
  }
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  clone<T>(data: T): T {
    return JSON.parse(JSON.stringify(data));
  }
  get groupedList() {
    const { recordList } = this;
    if (recordList.length === 0) {
      return [];
    }
    const newList = this.clone<RecordItem[]>(recordList)
      .filter(r => r.type === this.type)
      .sort(
        (a: any, b: any) =>
          dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf()
      );
    type Result = { title: string; total?: number; items: RecordItem[] }[];
    const result: Result = [
      {
        title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'),
        items: [newList[0]]
      }
    ];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
        last.items.push(current);
      } else {
        result.push({
          title: dayjs(current.createdAt).format('YYYY-MM-DD'),
          items: [current]
        });
      }
    }
    result.map(group => {
      group.total = group.items.reduce((sum, item) => {
        console.log(sum);
        console.log(item);
        return sum + item.amount;
      }, 0);
    });
    return result;
  }
  type = '-';
  interval = 'day';
  intervalList = intervalList;
  typeList = typeList;
  beforeCreate() {
    this.$store.commit('fetchRecords');
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
