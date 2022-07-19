<script setup lang="ts">
import { ref } from 'vue'
const navList = ref([
	{
		title: '基础组件',
		list: [
			{
				name: 'Button 按钮',
				path: '/pages/button/index'
			},
			{
				name: 'Cell 单元格',
				path: '/pages/cell/index'
			},
			{
				name: 'Icon 图标',
				path: '/pages/icon/index'
			},
			{
				name: 'Layout 布局',
				path: '/pages/layout/index'
			}
		]
	},
	{
		title: '反馈组件',
		list: [
			{
				name: 'Loading 加载',
				path: '/pages/loading/index'
			}
		]
	},
	{
		title: '展示组件',
		list: [
			{
				name: 'Badge 徽标',
				path: '/pages/badge/index'
			},
			{
				name: 'Tag 标签',
				path: '/pages/tag/index'
			}
		]
	},
	{
		title: '导航组件',
		list: [
			{
				name: 'NavBar 导航栏',
				path: '/pages/nav-bar/index'
			}
		]
	}
])

const clickNav = (path: string) => {
	console.log(path)
	uni.navigateTo({
		url: path
	})
}
</script>

<template>
	<view class="demo-home">
		<view class="demo-home__title">U-Vant</view>
		<view class="demo-home__desc">轻量、可靠的小程序 UI 组件库</view>
		<view class="demo-home-nav" v-for="(items, index) in navList" :key="index">
			<view class="demo-home-nav__title">{{items.title}}</view>
			<view class="demo-home-nav__group">
				<view
					class="demo-home-nav__block"
					v-for="(item, j) in items.list"
					:key="j"
					@click="clickNav(item.path)"
				>{{item.name}}</view>
				<!-- <view class="demo-home-nav__block">Cell 单元格</view> -->
			</view>
		</view>
	</view>
</template>

<style lang="less" scoped>
  .demo-home {
    width: 100%;
    min-height: 100%;
    padding: 120rpx 40rpx 40rpx 40rpx;
    box-sizing: border-box;
    background-color: #fff;
    .demo-home__title {
      font-size: 48rpx;
      color: #323233;
      font-weight: 400;
      line-height: 1;
      padding: 0 0 32rpx 32rpx;
    }
    .demo-home__desc {
      color: #455a6499;
      font-size: 28rpx;
      padding-left: 32rpx;
      margin: 0 0 80rpx;
    }
    .demo-home-nav {
      padding-bottom: 20rpx;
      .demo-home-nav__title {
        color: rgba(69,90,100,.6);
        font-size: 28rpx;
        padding: 0 0 16rpx 32rpx;
      }
      .demo-home-nav__group {
        .demo-home-nav__block {
          position: relative;
          display: flex;
          margin: 0 0 24rpx;
          padding-left: 40rpx;
          color: #323233;
          font-weight: 600;
          font-size: 24rpx;
          line-height: 80rpx;
          background: #f7f8fa;
          border-radius: 198rpx;
          transition: background .3s;
          box-sizing: border-box;
          &:active {
            background: #e4e8ee;
          }
          // &:hover {
          //   background: #eef0f4;
          // }
        }
      }
    }
  }
</style>
