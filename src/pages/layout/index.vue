<script setup lang="ts">

</script>

<template>
	<view class="demo-page">
		<view class="uvan-doc-demo-block__title">基础用法</view>
		<view class="uvan-doc-demo-group">
			<uvan-row>
				<uvan-col span="8" >span: 8</uvan-col>
				<uvan-col span="8" >span: 8</uvan-col>
				<uvan-col span="8" >span: 8</uvan-col>
			</uvan-row>
		</view>
		<view class="uvan-doc-demo-group">
			<uvan-row>
				<uvan-col span="4" >span: 4</uvan-col>
				<uvan-col span="10" offset="4">span: 10 offset: 4</uvan-col>
			</uvan-row>
		</view>
		<view class="uvan-doc-demo-group">
			<uvan-row>
				<uvan-col span="12" offset="12">span: 12 offset: 12</uvan-col>
			</uvan-row>
		</view>
		<view class="uvan-doc-demo-block__title">在列元素之间增加间距</view>
		<view class="uvan-doc-demo-group">
			<uvan-row gutter="20">
				<uvan-col span="8" >span: 8</uvan-col>
				<uvan-col span="8" >span: 8</uvan-col>
				<uvan-col span="8" >span: 8</uvan-col>
			</uvan-row>
		</view>
	</view>
</template>

<style lang="less" scoped>
.demo-page {
  padding-bottom: 80rpx;
  .uvan-doc-demo-group {
    padding: 0 32rpx;
    .demo-uvan-loading {
      margin-right: 50rpx;
    }
  }
}
</style>

<style lang="less">
.demo-page {
  .uvan-col {
    line-height: 30px;
    text-align: center;
    color: #fff;
    // border: 1px solid #ccc;
    background-color: #66c6f2;
    background-clip: content-box;
    margin-bottom: 20rpx;
  }
}
</style>
