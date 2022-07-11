<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
	// 图标名称或图片链接
	name: {
		type: String,
		required: true
	},
	// 	图标颜色
	color: {
		type: String,
		default: 'inherit'
	},
	// 图标大小，如 20px 2em，默认单位为 rpx
	size: {
		type: [String, Number],
		default: 'inherit'
	},
	// 类名前缀，用于使用自定义图标
	classPrefix: {
		type: String,
		default: 'uvan-icon'
	},
	// 是否显示图标右上角小红点
	dot: {
		type: Boolean,
		default: false
	},
	// 图标右上角徽标的内容
	badge: {
		type: [String, Number]
	},
	// 自定义徽标的属性，传入的对象会被透传给 Badge 组件的 props
	badgeProps: {
		type: [String, Number]
	}
})

const urlName = computed(() => {
	return /^http/.test(props.name)
})

const className = computed(() => {
	if (urlName.value) {
		return `uvan-icon__wrapper ${props.classPrefix}`
	}
	return `uvan-icon__wrapper ${props.classPrefix} ${props.name}`
})

const iconStyle = computed(() => {
	const style: Record<string, string> = {}
	if (props.color !== 'inherit') style.color = props.color
	if (props.size !== 'inherit') {
		if (typeof props.size === 'number') {
			style.fontSize = props.size + 'rpx'
		} else {
			style.fontSize = props.size
		}
	}
	return style
})

const imgStyle = computed(() => {
	const style: Record<string, string> = { }
	if (props.size !== 'inherit') {
		if (typeof props.size === 'number') {
			style.width = props.size + 'rpx'
			style.height = props.size + 'rpx'
		} else {
			style.width = props.size
			style.height = props.size
		}
	} else {
		style.width = '32rpx'
		style.height = '32rpx'
	}
	return style
})
</script>

<template>
	<view :class="className" :style="iconStyle">
		<template v-if="urlName">
			<image :style="imgStyle" class="uvan-icon__image" :src="props.name" mode="aspectFit" />
		</template>
		<template v-if="props.dot">

		</template>
	</view>
</template>

<style lang="less" scoped>
@import url('../iconfont/iconfont.css');
.uvan-icon__wrapper {
	position: relative;
  display: inline-flex;
  align-items: center;
	.uvan-icon__image {
		width: 32rpx;
		height: 32rpx;
	}
}
</style>
