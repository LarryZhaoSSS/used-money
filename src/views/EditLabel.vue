<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="arrow-left" @click.native="goBack" />
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <form-item
        @update:value="updateTag"
        field-name="标签名"
        :value="tag.name"
        placeholder="在这里输入标签名"
      ></form-item>
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { tagListModel } from "../models/tagListModel";
import FormItem from "@/components/money/FormItem.vue";
import Button from "@/components/Button.vue";
@Component({
  components: { FormItem, Button }
})
export default class EditLabel extends Vue {
  tag?: Tag = undefined;
  created() {
    this.tag = window.findTag(this.$route.params.id);
    if (!this.tag) {
      this.$router.replace("/404");
    }
  }

  updateTag(name: string) {
    if (this.tag) {
      window.updateTag(this.tag.id, name);
    }
  }
  remove() {
    if (this.tag) {
      if (window.removeTag(this.tag.id)) {
        this.goBack();
      } else {
        window.alert("delete fail");
      }
    }
  }
  goBack() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .leftIcon {
    width: 24px;
    height: 24px;
  }
  .title {
  }
  .rightIcon {
    width: 24px;
    height: 24px;
  }
}
.form-wrapper {
  background: white;
  margin-top: 8px;
}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>

