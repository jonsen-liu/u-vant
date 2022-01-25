<script lang="ts" setup>
const clickNavLeft = () => {
	// #ifndef H5
	uni.navigateBack({
		delta: 1
	})
	// #endif
	// #ifdef H5
	window.history.back()
	// #endif
}
const clickLeft = () => {
	uni.showToast({
		title: '点击了左侧',
		icon: 'none'
	})
}
const clickRight = () => {
	uni.showToast({
		title: '点击了右侧',
		icon: 'none'
	})
}
</script>

<template>
  <view class="demo-page demo-nav-bar">
    <view class="uvan-doc-demo-block__title">基础用法</view>
    <uvan-nav-bar title="标题" ></uvan-nav-bar>
    <view class="uvan-doc-demo-block__title">返回上级</view>
    <uvan-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      @clickLeft="clickLeft"
    ></uvan-nav-bar>
    <view class="uvan-doc-demo-block__title">右侧按钮</view>
    <uvan-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @clickLeft="clickLeft"
      @clickRight="clickRight"
    />
    <view class="uvan-doc-demo-block__title">使用插槽</view>
    <uvan-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      @clickLeft="clickLeft"
      @clickRight="clickRight"
    >
      <template #left>
        <uvan-icon name="search" size="18" />
      </template>
      <template #right>
        <uvan-icon name="search" size="18" />
      </template>
    </uvan-nav-bar>
  </view>
</template>

<style lang="less" scoped>
.demo-nav-bar {
  width: 100%;
  min-height: 100vh;
}
</style>