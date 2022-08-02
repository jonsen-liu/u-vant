<script setup lang="ts">
import { ref, reactive } from 'vue'

const value = reactive<{
	show1: boolean
	show2: boolean
}>({
	show1: false,
	show2: false
})

const position = ref<'center' | 'top' | 'bottom' | 'right' | 'left'>('center')

const handleClick = (type: 'center' | 'top' | 'bottom' | 'right' | 'left') => {
	position.value = type
	if (type === 'center') {
		value.show1 = true
	}
}

</script>

<template>
	<div class="demo-page">
		<uvan-popup v-model="value.show1" :position="position" >
			<view class="block1">
				内容
			</view>
		</uvan-popup>
		<div class="uvan-doc-demo-block__title">基础用法</div>
		<uvan-cell-group inset>
			<uvan-cell title="展示弹出层" value="内容" is-link arrow-direction="right" @click="handleClick('center')"/>
		</uvan-cell-group>

		<div class="uvan-doc-demo-block__title">弹出位置</div>
		<uvan-cell-group inset>
			<uvan-cell title="顶部弹出" value="内容" is-link arrow-direction="right" @click="handleClick('top')"/>
		</uvan-cell-group>

	</div>
</template>

<style lang="less" scoped>
.demo-page {
  min-height: 100vh;
  .custom-title {
    margin-right: 8rpx;
  }
	.block1 {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 400rpx;
		height: 400rpx;
		background-color: #fff;
	}
}
</style>
