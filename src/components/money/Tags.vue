<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li
        :class="{selected:selectedTags.includes(tag)}"
        v-for="(tag,index) in tagList"
        :key="index"
        @click="toggle(tag)"
      >{{tag.name}}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import store from "../../store/index2";
@Component({
  computed: {
    tagList() {
      return this.$store.state.tagList;
    }
  }
})
export default class Tags extends Vue {
  @Prop({ required: true }) readonly dataSource!: string[];
  selectedTags: string[] = [];
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
      return;
    }
    this.selectedTags.push(tag);
    this.$emit("update:value", this.selectedTags);
  }
  created() {
    this.$store.commit("fetchTags");
  }
  create() {
    const name = window.prompt("请输入新的标签名字");
    if (!name) {
      return window.alert("标签不能为空");
    }
    this.$store.commit("createTag", name);
  }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags {
  background: white;
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  .current {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    li {
      $bg: #d9d9d9;
      background: $bg;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
      &.selected {
        background: darken($bg, 40%);
        color: #fff;
      }
    }
  }
  .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>