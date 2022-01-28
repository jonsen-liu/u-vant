<script lang="ts" setup>
console.log(1)
</script>

<template>
  <view class="demo-page">
    <view class="uvan-doc-demo-block__title">基础用法</view>
    <view class="uvan-doc-demo-group">
      <uvan-button class="uvan-demo-button" type="primary">主要按钮</uvan-button>
      <uvan-button class="uvan-demo-button" type="success">成功按钮</uvan-button>
      <uvan-button class="uvan-demo-button" type="default">默认按钮</uvan-button>
      <uvan-button class="uvan-demo-button" type="warn">警告按钮</uvan-button>
      <uvan-button class="uvan-demo-button" type="danger">危险按钮</uvan-button>
    </view>
    <view class="uvan-doc-demo-block__title">朴素按钮</view>
    <view class="uvan-doc-demo-group">
      <uvan-button class="uvan-demo-button" type="primary" plain>主要按钮</uvan-button>
      <uvan-button class="uvan-demo-button" type="success" plain>成功按钮</uvan-button>
      <uvan-button class="uvan-demo-button" type="warn" plain>警告按钮</uvan-button>
      <uvan-button class="uvan-demo-button" type="danger" plain>危险按钮</uvan-button>
    </view>
    <view class="uvan-doc-demo-block__title">细边框</view>
    <view class="uvan-doc-demo-group">
      <uvan-button class="uvan-demo-button" type="primary" plain hairline>主要按钮</uvan-button>
      <uvan-button class="uvan-demo-button" type="success" plain hairline>成功按钮</uvan-button>
      <uvan-button class="uvan-demo-button" type="warn" plain hairline>警告按钮</uvan-button>
      <uvan-button class="uvan-demo-button" type="danger" plain hairline>危险按钮</uvan-button>
    </view>
    <view class="uvan-doc-demo-block__title">禁用状态</view>
    <view class="uvan-doc-demo-group">
      <uvan-button class="uvan-demo-button" type="primary" plain hairline disabled>主要按钮</uvan-button>
      <uvan-button class="uvan-demo-button" type="success" disabled>成功按钮</uvan-button>
    </view>
    <view class="uvan-doc-demo-block__title">加载状态</view>
    <view class="uvan-doc-demo-group">
      <uvan-button class="uvan-demo-button" type="primary" plain hairline loading>主要按钮</uvan-button>
      <uvan-button class="uvan-demo-button" type="primary" plain loading>主要按钮</uvan-button>
      <uvan-button class="uvan-demo-button" type="success" loading>成功按钮</uvan-button>
    </view>
  </view>
</template>

<style lang="less" scoped>
.uvan-doc-demo-group {
  display: flex;
  flex-wrap: wrap;
  padding: 0 32rpx;
  .uvan-demo-button {
    margin-right: 32rpx;
    margin-bottom: 24rpx;
  }
}
</style>