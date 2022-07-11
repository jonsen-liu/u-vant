<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
	// 	标题
	title: {
		type: String,
		default: ''
	},
	// 左侧文案
	leftText: {
		type: String,
		default: ''
	},
	// 是否显示左侧箭头
	leftArrow: {
		type: Boolean,
		default: false
	},
	// 右侧文案
	rightText: {
		type: String,
		default: ''
	},
	fixed: {
		type: Boolean,
		default: false
	},
	// 固定在顶部时，是否在标签位置生成一个等高的占位元素
	placeholder: {
		type: Boolean,
		default: false
	},
	// 导航栏 z-index
	zIndex: {
		type: Number
	},
	// 是否固定在顶部
	safeAreaInsetTop: {
		type: Boolean,
		default: false
	}
})

const emit = defineEmits(['click-left', 'click-right'])

const statusBarHeight = ref(0)

const statusBarHeightPX = computed(() => {
	return (statusBarHeight.value * 2) + 'rpx'
})

const navBarStyle = computed(() => {
	const style: Record<string, string | number> = {
		paddingTop: statusBarHeightPX.value
	}
	if (props.fixed) {
		style.position = 'fixed'
		style.top = '0px'
	}
	if (props.zIndex) {
		style.zIndex = props.zIndex
	}
	return style
})

const clickLeft = () => {
	emit('click-left')
}

const clickRight = () => {
	emit('click-right')
}

onMounted(() => {
	if (props.safeAreaInsetTop) {
		uni.getSystemInfo({
			success: (res) => {
				statusBarHeight.value = res.statusBarHeight || 0
			}
		})
	}
})
</script>

<template>
	<view class="uvan-nav-bar">
		<view
			class="uvan-nav-bar__content uvan-hairline--bottom"
			:style="navBarStyle"
		>
			<view class="uvan-nav-bar__left" @click="clickLeft">
				<slot name="left">
					<uvan-icon v-if="leftArrow" name="arrow-left" />
					<text class="uvan-nav-bar__text">{{props.leftText}}</text>
				</slot>
			</view>
			<view class="uvan-nav-bar__title uvan-ellipsis">
				<slot name="title">
					{{title}}
				</slot>
			</view>

			<view class="uvan-nav-bar__right" @click="clickRight">
				<slot name="right">
					<text class="uvan-nav-bar__text">{{props.rightText}}</text>
				</slot>
			</view>
		</view>
		<view v-if="props.placeholder" class="uvan-nav-bar__placeholder"></view>
	</view>
</template>

<style lang="less">
.uvan-nav-bar {

  --uvan-nav-bar-height: 92rpx;
  --uvan-nav-bar-background-color:var(--uvan-background-color-light);
  --uvan-nav-bar-arrow-size: 32rpx;
  --uvan-nav-bar-icon-color:var(--uvan-primary-color);
  --uvan-nav-bar-text-color:var(--uvan-primary-color);
  --uvan-nav-bar-title-font-size:var(--uvan-font-size-lg);
  --uvan-nav-bar-title-text-color:var(--uvan-text-color);
  --uvan-nav-bar-z-index: 1;
  position: relative;
  width: 100%;

  .uvan-nav-bar__content {
    position: relative;
    z-index: var(--uvan-nav-bar-z-index);
    width: 100%;
    height: var(--uvan-nav-bar-height);
    line-height: var(--uvan-line-height-lg);
    text-align: center;
    background: var(--uvan-nav-bar-background-color);
    user-select: none;
    display: flex;
    align-items: center;

    &.uvan-hairline--bottom::after {
      position: absolute;
      content: " ";
      pointer-events: none;
      left: -50%;
      top: -50%;
      width: 200%;
      height: 200%;
      border: 0 solid var(--uvan-border-color);
      border-bottom-width: 1px;
      transform: scale(0.5);
      box-sizing: border-box;
    }
    .uvan-nav-bar__left {
      position: absolute;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      width: auto;
      padding: 0 var(--uvan-padding-md);
      padding-top: v-bind(statusBarHeightPX);
      font-size: var(--uvan-font-size-md);
      color: var(--uvan-nav-bar-text-color);
      cursor: pointer;
    }
    .uvan-nav-bar__title {
      max-width: 50%;
      margin: 0 auto;
      color: var(--uvan-nav-bar-title-text-color);
      font-weight: var(--uvan-font-weight-bold);
      font-size: var(--uvan-nav-bar-title-font-size);
    }
    .uvan-nav-bar__right {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: auto;
      display: flex;
      align-items: center;
      padding: 0 var(--uvan-padding-md);
      padding-top: v-bind(statusBarHeightPX);
      font-size: var(--uvan-font-size-md);
      color: var(--uvan-nav-bar-text-color);
      cursor: pointer;
    }
  }
  .uvan-nav-bar__placeholder {
    padding-top: v-bind(statusBarHeightPX);
    height: var(--uvan-nav-bar-height);
  }
}
</style>
