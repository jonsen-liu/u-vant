<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
	// 	分组标题
	title: {
		type: String,
		default: ''
	},
	// 是否展示为圆角卡片风格
	inset: {
		type: Boolean,
		default: false
	}
})

const className = computed(() => {
	let str = 'uvan-cell-group'
	if (props.inset) str += ' uvan-cell-group--inset'
	return str
})
</script>
<template>
	<view :class="className">
		<view v-if="props.title" class="uvan-cell-group__title">{{props.title}}</view>
		<view class="uvan-cell-group__main uvan-hairline--top-bottom">
			<slot></slot>
		</view>
	</view>
</template>
<style lang="less" scoped>
  @import url('./variable.less');
  .uvan-cell-group {
    &.uvan-cell-group--inset {
      margin: var(--uvan-cell-group-inset-padding);
      border-radius: var(--uvan-cell-group-inset-border-radius);
      overflow: hidden;
    }
    .uvan-cell-group__title {
      padding: var(--uvan-cell-group-title-padding);
      color: var(--uvan-cell-group-title-color);
      font-size: var(--uvan-cell-group-title-font-size);
      line-height: var(--uvan-cell-group-title-line-height);
    }
    .uvan-cell-group__main {
      position: relative;
      background: var(--uvan-cell-group-background-color);
      .uvan-hairline--top-bottom::after {
        position: absolute;
        box-sizing: border-box;
        content: " ";
        pointer-events: none;
        top: -50%;
        right: -50%;
        bottom: -50%;
        left: -50%;
        border: 0 solid var(--uvan-cell-border-color);
        transform: scale(.5);
        border-width: 1px 0;
      }
    }
  }
</style>
