<script setup lang="ts">
import { ref } from 'vue'
import UvanOverlay from '@/components/uvan-overlay/uvan-overlay.vue'

const flag1 = ref(false)
const flag2 = ref(false)

const handleClick = (type: number) => {
	console.log('handleClick')
	if (type === 1) {
		flag1.value = !flag1.value
	} else {
		flag2.value = !flag2.value
	}
}
console.log('flag1.value')
console.log(flag1.value)
console.log('flag2.value')
console.log(flag2.value)

</script>

<template>
	<view class="demo-page">
		<view class="uvan-doc-demo-block__title">基础用法</view>
		<view class="uvan-doc-demo-group">
			<uvan-button type="success" @click="handleClick(1)">显示遮罩层</uvan-button>
			<uvan-overlay v-model="flag1" close @click="flag1 = false"/>
		</view>
		<view class="uvan-doc-demo-block__title">嵌入内容</view>
		<view class="uvan-doc-demo-group">
			<uvan-button type="success" @click="handleClick(2)">嵌入内容</uvan-button>
			<uvan-overlay v-model="flag2" close @click="flag2 = false">
				<view class="wrapper">
					<view class="block" @click.stop/>
				</view>
			</uvan-overlay>
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
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      .block {
        width: 120px;
        height: 120px;
        background-color: #fff;
      }
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
