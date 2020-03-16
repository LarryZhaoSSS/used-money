<template>
  <div>
    <label class="form-item">
      <span class="name">{{fieldName}}</span>
      <input
        :value="value"
        @input="onValueChanged($event.target.value)"
        :placeholder="placeholder"
        type="text"
      />
    </label>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Watch, Prop } from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  @Prop({ default: "" }) value!: string;
  @Prop({ required: true }) fieldName!: string;
  @Prop() placeholder?: string;
  @Watch("value")
  onValueChanged(value: string) {
    this.$emit("update:value", value);
  }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.form-item {
  font-size: 14px;
  display: block;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>