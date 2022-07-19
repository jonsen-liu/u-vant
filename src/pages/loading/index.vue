<script setup lang="ts">
import { PropType } from 'vue'

const props = defineProps({
	type: {
		type: String as PropType<'circular' | 'spinner'>,
		default: 'circular'
	}
})
</script>
<template>
	<view class="demo-page">
		<view class="uvan-doc-demo-block__title">加载类型</view>
		<view class="uvan-doc-demo-group">
			<uvan-loading class="demo-uvan-loading" ></uvan-loading>
			<uvan-loading class="demo-uvan-loading" type="spinner"></uvan-loading>
		</view>
		<view class="uvan-doc-demo-block__title">自定义颜色</view>
		<view class="uvan-doc-demo-group">
			<uvan-loading class="demo-uvan-loading" color="#1989fa"></uvan-loading>
			<uvan-loading class="demo-uvan-loading" type="spinner" color="#1989fa"></uvan-loading>
		</view>
		<view class="uvan-doc-demo-block__title">自定义大小</view>
		<view class="uvan-doc-demo-group">
			<uvan-loading class="demo-uvan-loading" :size="100"></uvan-loading>
			<uvan-loading class="demo-uvan-loading" type="spinner" :size="100"></uvan-loading>
		</view>
		<view class="uvan-doc-demo-block__title">加载文案</view>
		<view class="uvan-doc-demo-group">
			<uvan-loading class="demo-uvan-loading" size="24px" text="加载中"></uvan-loading>
			<uvan-loading class="demo-uvan-loading" type="spinner" size="24px" text="加载中" ></uvan-loading>
		</view>
		<view class="uvan-doc-demo-block__title">垂直排列</view>
		<view class="uvan-doc-demo-group">
			<uvan-loading class="demo-uvan-loading" size="24px" vertical text="加载中"></uvan-loading>
			<uvan-loading class="demo-uvan-loading" type="spinner" size="24px" vertical text="加载中"></uvan-loading>
		</view>
		<view class="uvan-doc-demo-block__title">自定义文本颜色</view>
		<view class="uvan-doc-demo-group">
			<uvan-loading class="demo-uvan-loading" color="#1989fa" size="24px" vertical text="加载中"></uvan-loading>
			<uvan-loading
				class="demo-uvan-loading"
				type="spinner"
				text-color="#1989fa"
				size="24px"
				vertical
				text="加载中..."></uvan-loading>
		</view>
	</view>
</template>

<style lang="less" scoped>
.demo-page {
  padding-bottom: 80rpx;
  .uvan-doc-demo-group {
    padding: 0 60rpx;
    .demo-uvan-loading {
      margin-right: 50rpx;
    }
  }
}
</style>
