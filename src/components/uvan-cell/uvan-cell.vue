<script setup lang="ts">
import { computed, useSlots } from 'vue'

const props = withDefaults(defineProps<{
  title?: string // 左侧标题
  label?: string // 标题下方的描述信息
  value?: string // 右侧内容
  size?: '' | 'large' // 单元格大小，可选值为 large
  icon?: string // 左侧图标名称或图片链接，等同于 Icon 组件的 name 属性
  isLink?: boolean // 是否展示右侧箭头并开启点击反馈
  arrowDirection?: 'right' | 'left' | 'up' | 'down' // 箭头方向，可选值为 left up down
}>(), {
	title: '',
	label: '',
	value: '',
	size: '',
	icon: '',
	isLink: false,
	arrowDirection: 'right'
})

const slots = useSlots()

const arrowValue = computed(() => {
	const direction = {
		left: 'arrow-left',
		right: 'arrow',
		up: 'arrow-up',
		down: 'arrow-down'
	}
	return direction[props.arrowDirection] || ''
})

const className = computed(() => {
	let str = 'uvan-cell'
	if (props.size) str += ` uvan-cell-group--${props.size}`
	if (props.isLink) str += ' uvan-cell--clickable'
	return str
})

const uvantCellName = computed(() => {
	let str = 'uvan-cell__value'
	if (
		!props.title &&
    !props.label &&
    !slots.title &&
    props.value
	) {
		str += ' uvan-cell__value--alone'
	}
	return str
})

</script>
<template>
	<div :class="className">
		<div
			class="uvan-cell__title"
			v-if="props.title || props.label || $slots['title']"
		>
			<template v-if="$slots['title']">
				<div class="uvan-cell__title-">
					<slot name="title"></slot>
				</div>
			</template>
			<template v-if="props.title || props.label">
				<div class="uvan-cell__title-">
					<template v-if="props.icon">
						<uvan-icon :name="props.icon" />
					</template>
					{{props.title}}
				</div>
			</template>
			<span class="uvan-cell__label" v-if="props.label">{{props.label}}</span>
		</div>
		<div :class="uvantCellName">
			<template v-if="$slots['right-icon']">
				<slot name="right-icon"></slot>
			</template>
			<template v-else>
				{{props.value}}
			</template>
		</div>
		<div v-if="isLink" class="uvan-cell__right-icon">
			<uvan-icon :name="arrowValue" />
		</div>
	</div>
</template>
<style lang="less" scoped>
  @import url('../uvan-cell-group/variable.less');
  .uvan-cell {
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    min-height: var(--uvan-cell-height);
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
    &.uvan-cell--clickable:active {
      background-color: var(--uvan-cell-active-color);
    }
    .uvan-cell__title {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .uvan-cell__label {
        margin-top: var(--uvan-cell-label-margin-top);
        color: var(--uvan-cell-label-color);
        font-size: var(--uvan-cell-label-font-size);
        line-height: var(--uvan-cell-label-line-height);
      }
    }
    .uvan-cell__value {
      position: relative;
      flex: 1;
      display: flex;
      overflow: hidden;
      justify-content: flex-end;
      align-items: center;
      color: var(--uvan-cell-value-color);
      word-wrap: break-word;

      &.uvan-cell__value--alone {
        color: var(--uvan-text-color);
        justify-content: flex-start;
      }
    }
    .uvan-cell__right-icon {
      display: flex;
      align-items: center;
      color: var(--uvan-cell-value-color);
    }
  }
</style>
