<template>
  <div>
    <Layout class-prefix="layout">
      <number-pad @update:value="onUpdateAmount" @submit="saveRecord"></number-pad>
      <types :type="record.type" :value.sync="record.type"></types>
      <div class="notes">
        <form-item field-name="备注" placeholder="在这里输入备注" @update:value="onUpdateNotes"></form-item>
      </div>

      <tags :data-source="tags"></tags>
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
window.localStorage.setItem("version", "0.0.1");
import store from "@/store/index2";

@Component({
  components: { Tags, FormItem, Types, NumberPad },
  computed: {
    recordList() {
      return this.$store.state.recordList;
    }
  }
})
export default class Money extends Vue {
  tags = store.tagList;
  // recordList: RecordItem[] = store.recordList;
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };
  created() {
    this.$store.commit("fetchRecords");
  }
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
    // store.createRecord(this.record);
    this.$store.commit("createRecord", this.record);
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
