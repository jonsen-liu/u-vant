<script setup lang="ts">
import { computed, PropType } from 'vue'

const props = defineProps({
	// 左侧标题
	title: {
		type: String,
		defalut: ''
	},
	// 标题下方的描述信息
	label: {
		type: String,
		defalut: ''
	},
	// 右侧内容
	value: {
		type: String,
		defalut: ''
	},
	// 单元格大小，可选值为 large
	size: {
		type: String as PropType<'' | 'large'>,
		default: ''
	},
	// 左侧图标名称或图片链接，等同于 Icon 组件的 name 属性
	icon: {
		type: String,
		default: ''
	}
})

const className = computed(() => {
	let str = 'uvan-cell'

	if (props.size) str += ` uvan-cell-group--${props.size}`
	return str
})
</script>
<template>
  <view :class="className">
    <view class="uvan-cell__title" v-if="props.title || props.label">
      
      <view v-if="props.title">
        <template v-if="props.icon">
          <uvan-icon :name="props.icon" />
        </template>
        {{props.title}}
      </view>
      <text class="uvan-cell__label" v-if="props.label">{{props.label}}</text>
    </view>
    <view class="uvan-cell__value">
      {{props.value}}
    </view>
  </view>
</template>
<style lang="less" scoped>
  @import url('../uvan-cell-group/variable.less');
  .uvan-cell {
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: var(--uvan-cell-vertical-padding) var(--uvan-cell-horizontal-padding);
    overflow: hidden;
    color: var(--uvan-cell-text-color);
    font-size: var(--uvan-cell-font-size);
    line-height: var(--uvan-cell-line-height);
    background: var(--uvan-cell-background-color);
    &::after {
      position: absolute;
      box-sizing: border-box;
      content: " ";
      pointer-events: none;
      right: var(--uvan-padding-md);
      bottom: 0;
      left: var(--uvan-padding-md);
      border-bottom: 1px solid var(--uvan-cell-border-color);
      transform: scaleY(.5);
    }
    &.uvan-cell-group--large {
      padding-top: var(--uvan-cell-large-vertical-padding);
      padding-bottom: var(--uvan-cell-large-vertical-padding);
      .uvan-cell__title {
        font-size: var(--uvan-cell-large-title-font-size);
        .uvan-cell__label {
          font-size: var(--uvan-cell-large-label-font-size);
        }
      }
    }
    .uvan-cell__title {
      flex: 1;
      display: flex;
      flex-direction: column;
      .uvan-cell__label {
        margin-top: var(--uvan-cell-label-margin-top);
        color: var(--uvan-cell-label-color);
        font-size: var(--uvan-cell-label-font-size);
        line-height: var(--uvan-cell-label-line-height);
      }
    }
    .uvan-cell__value {
      flex: 1;
      position: relative;
      overflow: hidden;
      color: var(--uvan-cell-value-color);
      text-align: right;
      vertical-align: middle;
      word-wrap: break-word;
    }
  }
</style>