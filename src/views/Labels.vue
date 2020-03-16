<template>
  <div class="labels">
    <Layout>
      <div class="tags">
        <router-link :to="`/labels/edit/${tag.id}`" class="tag" v-for="tag in tags" :key="tag.id">
          <span>{{tag.name}}</span>
          <Icon name="arrow-right"></Icon>
        </router-link>
      </div>
      <div class="createTag-wrapper">
        <Button class="createTag" @click="createTag">新建标签</Button>
      </div>
    </Layout>
    <div v-if="false" class="container">
      <div class="wrapper">
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>
        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { tagListModel } from "../models/tagListModel";
import Button from "@/components/Button.vue";
tagListModel.fetch();
@Component({
  components: { Button }
})
export default class Labels extends Vue {
  tags = tagListModel.data;
  createTag() {
    const name = window.prompt("请输入标签名");
    if (name) {
      const message = tagListModel.create(name);
      console.log(message);
      if (message === "duplicated") {
        window.alert("存在了");
      } else if (message === "success") {
        window.alert("添加成功");
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}
.createTag {
  background: #767676;
  border-radius: 4px;
  color: white;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>
<style lang="scss" scoped>
// .labels {
//   overflow: auto;
// }
// .container {
//   height: 300px;
//   margin: 100px 30px;
//   overflow: auto;
//   .wrapper {
//     padding: 0 10px;
//     min-height: 310px;
//   }
// }
</style>