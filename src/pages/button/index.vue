<script lang="ts" setup>
import { ref } from 'vue'
const loading = ref(false)
console.log(1)
const handleClick = () => {
	uni.showToast({
		title: '点击了按钮'
	})
}

const clickLoading = () => {
	loading.value = !loading.value
	setTimeout(() => {
		loading.value = !loading.value
	}, 1000)
}
</script>

<template>
	<view class="demo-page">
		<view class="uvan-doc-demo-block__title">基础用法</view>
		<view class="uvan-doc-demo-group">
			<view class="uvan-demo-button">
				<uvan-button type="primary" @click="handleClick">主要按钮</uvan-button>
			</view>
			<view class="uvan-demo-button">
				<uvan-button type="success" @click="handleClick">成功按钮</uvan-button>
			</view>
			<view class="uvan-demo-button">
				<uvan-button type="default" @click="handleClick">默认按钮</uvan-button>
			</view>
			<view class="uvan-demo-button">
				<uvan-button type="warn" @click="handleClick">警告按钮</uvan-button>
			</view>
			<view class="uvan-demo-button">
				<uvan-button type="danger" @click="handleClick">危险按钮</uvan-button>
			</view>
		</view>
		<view class="uvan-doc-demo-block__title">朴素按钮</view>
		<view class="uvan-doc-demo-group">
			<view class="uvan-demo-button">
				<uvan-button type="primary" plain @click="handleClick">主要按钮</uvan-button>
			</view>
			<view class="uvan-demo-button">
				<uvan-button type="success" plain @click="handleClick">成功按钮</uvan-button>
			</view>
			<view class="uvan-demo-button">
				<uvan-button type="warn" plain @click="handleClick">警告按钮</uvan-button>
			</view>
			<view class="uvan-demo-button">
				<uvan-button type="danger" plain @click="handleClick">危险按钮</uvan-button>
			</view>
		</view>
		<view class="uvan-doc-demo-block__title">细边框</view>
		<view class="uvan-doc-demo-group">
			<view class="uvan-demo-button">
				<uvan-button type="primary" plain hairline @click="handleClick">主要按钮</uvan-button>
			</view>
			<view class="uvan-demo-button">
				<uvan-button type="success" plain hairline @click="handleClick">成功按钮</uvan-button>
			</view>
			<view class="uvan-demo-button">
				<uvan-button type="warn" plain hairline @click="handleClick">警告按钮</uvan-button>
			</view>
			<view class="uvan-demo-button">
				<uvan-button type="danger" plain hairline @click="handleClick">危险按钮</uvan-button>
			</view>
		</view>
		<view class="uvan-doc-demo-block__title">禁用状态</view>
		<view class="uvan-doc-demo-group">
			<view class="uvan-demo-button">
				<uvan-button type="primary" plain hairline disabled @click="handleClick">主要按钮</uvan-button>
			</view>
			<view class="uvan-demo-button">
				<uvan-button type="success" disabled @click="handleClick">成功按钮</uvan-button>
			</view>
		</view>
		<view class="uvan-doc-demo-block__title">加载状态</view>
		<view class="uvan-doc-demo-group">
			<view class="uvan-demo-button">
				<uvan-button type="primary" plain hairline loading @click="handleClick"></uvan-button>
			</view>
			<view class="uvan-demo-button">
				<uvan-button type="primary" plain loading @click="handleClick"></uvan-button>
			</view>
			<view class="uvan-demo-button">
				<uvan-button type="success" loading loading-type="spinner" @click="handleClick" loading-text="加载中..."></uvan-button>
			</view>
			<view class="uvan-demo-button">
				<uvan-button type="default" loading @click="handleClick"></uvan-button>
			</view>
			<view class="uvan-demo-button">
				<uvan-button type="primary" :loading="loading" @click="clickLoading">点击加载</uvan-button>
			</view>
		</view>
		<view class="uvan-doc-demo-block__title">按钮形状</view>
		<view class="uvan-doc-demo-group">
			<view class="uvan-demo-button">
				<uvan-button type="primary" square  @click="handleClick">主要按钮</uvan-button>
			</view>
			<view class="uvan-demo-button">
				<uvan-button type="success" round  @click="handleClick">成功按钮</uvan-button>
			</view>
		</view>
		<view class="uvan-doc-demo-block__title">图标按钮</view>
		<view class="uvan-doc-demo-group">
			<view class="uvan-demo-button">
				<uvan-button icon="plus" type="primary"  @click="handleClick"></uvan-button>
			</view>
			<view class="uvan-demo-button">
				<uvan-button icon="plus" type="primary"  @click="handleClick">按钮</uvan-button>
			</view>
			<view class="uvan-demo-button">
				<uvan-button icon="https://img01.yzcdn.cn/vant/user-active.png" type="default"  @click="handleClick">成功按钮</uvan-button>
			</view>
		</view>
		<view class="uvan-doc-demo-block__title">按钮尺寸</view>
		<view class="uvan-doc-demo-group">
			<view class="uvan-demo-button-mb uvan-demo-button-large">
				<uvan-button type="primary" size="large" @click="handleClick">大号按钮</uvan-button>
			</view>
			<view class="uvan-demo-button">
				<uvan-button type="primary" size="normal" @click="handleClick">普通按钮</uvan-button>
			</view>
			<view class="uvan-demo-button">
				<uvan-button type="primary" size="small" @click="handleClick">小型按钮</uvan-button>
			</view>
			<view class="uvan-demo-button">
				<uvan-button type="primary" size="mini" @click="handleClick">迷你按钮</uvan-button>
			</view>
		</view>
		<view class="uvan-doc-demo-block__title">块级元素</view>
		<view class="uvan-doc-demo-group">
			<view class="uvan-demo-button-large">
				<uvan-button type="primary" block @click="handleClick">块级元素</uvan-button>
			</view>
		</view>
		<view class="uvan-doc-demo-block__title">自定义颜色</view>
		<view class="uvan-doc-demo-group">
			<view class="uvan-demo-button">
				<uvan-button color="#7232dd" @click="handleClick">单色按钮</uvan-button>
			</view>
			<view class="uvan-demo-button">
				<uvan-button color="#7232dd" plain @click="handleClick">单色按钮</uvan-button>
			</view>
			<view class="uvan-demo-button">
				<uvan-button color="linear-gradient(to right, #ff6034, #ee0a24)" @click="handleClick">
					渐变色按钮
				</uvan-button>
			</view>
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
  .uvan-demo-button-large {
    width: 100%;
  }
  .uvan-demo-button-mb {
    margin-bottom: 24rpx;
  }
}
</style>
