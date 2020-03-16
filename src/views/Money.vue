<template>
  <div>
    <Layout class-prefix="layout">
      <number-pad @update:value="onUpdateAmount" @submit="saveRecord"></number-pad>
      <types :type="record.type" :value.sync="record.type"></types>
      <div class="notes">
        <form-item field-name="备注" placeholder="在这里输入备注" @update:value="onUpdateNotes"></form-item>
      </div>

      <tags :data-source.sync="tags" @update:value="onUpdateTags"></tags>
    </Layout>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/money/number-pad.vue";
import Types from "@/components/money/Types.vue";
import FormItem from "@/components/money/FormItem.vue";
import Tags from "@/components/money/Tags.vue";
import { Component, Watch } from "vue-property-decorator";
import { recordList as recordListModel } from "@/models/recordListModel";
import { tagListModel } from "@/models/tagListModel";
window.localStorage.setItem("version", "0.0.1");
const tagList = tagListModel.fetch();
@Component({
  components: { Tags, FormItem, Types, NumberPad }
})
export default class Money extends Vue {
  tags = tagList;
  recordList = recordListModel.fetch();
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }
  saveRecord() {
    const newRecord: RecordItem = recordListModel.clone(this.record);
    newRecord.createdAt = new Date();
    this.recordList.push(newRecord);
  }
  @Watch("recordList")
  onRecordListChange() {
    recordListModel.save(this.recordList);
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.notes {
  padding: 12px 0;
}
</style>
