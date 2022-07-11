<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(
	defineProps<{
    // 类型，可选值为primary success danger warning
    type?: 'default' | 'primary' | 'success' | 'danger' | 'warning';
    // 大小, 可选值为large medium
    size?: 'large' | 'medium' | '';
    // 标签颜色
    color?: string;
    // 是否为空心样式
    plain?: boolean;
    // 是否为圆角样式
    round?: boolean;
    // 是否为标记样式
    mark?: boolean;
    // 文本颜色，优先级高于color属性
    textColor?: string;
    // 是否为可关闭标签
    closeable?: boolean;
    // 显示隐藏
    show: boolean
  }>(),
	{
		type: 'default',
		size: '',
		color: '',
		plain: false,
		round: false,
		mark: false,
		textColor: '',
		closeable: false,
		show: true
	}
)

const emit = defineEmits<{(e: 'close'): void}>()

const className = computed(() => {
	let str = `uvan-tag uvan-tag--${props.type} `
	if (props.plain) str += 'uvan-tag--plain '
	if (props.round) str += 'uvan-tag--round '
	if (props.mark) str += 'uvan-tag--mark '
	if (props.size) str += `uvan-tag--${props.size} `
	if (!props.show) str += 'uvan-tag--none '
	return str
})

const CSSstyle = computed(() => {
	if (props.plain) {
		return {
			borderColor: props.color,
			color: props.textColor || props.color
		}
	}
	return {
		background: props.color,
		color: props.textColor
	}
})

const clickCross = () => {
	if (props.closeable) {
		emit('close')
	}
}

</script>

<template>
	<div
		:class="[className, !props.show && 'uvan-tag--close']"
		:style="CSSstyle"
	>
		<slot></slot>
		<span
			v-if="props.closeable"
			class="uvan-tag__close"
			@click="clickCross"
		>
			<uvan-icon name="cross" size="24rpx" />
		</span>
	</div>
</template>

<style lang="less" scoped>
@import url("./variable.less");

@keyframes uvanTagClose {
  0% {
    transform: scale(1);
  }
  99% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    width: 0px;
    height: 0px;
    padding: 0px;
    opacity: 0;
    display: none;
  }
}

.uvan-tag {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: var(--uvan-tag-padding);
  color: var(--uvan-tag-text-color);
  font-size: var(--uvan-tag-font-size);
  line-height: var(--uvan-tag-line-height);
  border-radius: var(--uvan-tag-radius);
  &.uvan-tag--none {
    display: none;
  }
  &.uvan-tag--close {
    animation: uvanTagClose 0.3s 1;
    animation-fill-mode: forwards;
  }
  &.uvan-tag--round {
    border-radius: var(--uvan-tag-round-radius);
  }
  &.uvan-tag--mark {
    border-radius: 0 var(--uvan-tag-round-radius) var(--uvan-tag-round-radius) 0;
  }

  &.uvan-tag--plain::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid;
    border-color: inherit;
    border-radius: inherit;
    content: "";
    pointer-events: none;
  }
  &.uvan-tag--default {
    background-color: var(--uvan-tag-default-color);
    &.uvan-tag--plain {
      background-color: #fff;
      color: var(--uvan-tag-default-color);
      border-color: var(--uvan-tag-default-color);
    }
  }
  &.uvan-tag--success {
    background-color: var(--uvan-tag-success-color);
    &.uvan-tag--plain {
      background-color: #fff;
      color: var(--uvan-tag-success-color);
      border-color: var(--uvan-tag-success-color);
    }
  }
  &.uvan-tag--danger {
    background-color: var(--uvan-tag-danger-color);
    &.uvan-tag--plain {
      background-color: #fff;
      color: var(--uvan-tag-danger-color);
      border-color: var(--uvan-tag-danger-color);
    }
  }
  &.uvan-tag--warning {
    background-color: var(--uvan-tag-warning-color);
    &.uvan-tag--plain {
      background-color: #fff;
      color: var(--uvan-tag-warning-color);
      border-color: var(--uvan-tag-warning-color);
    }
  }
  &.uvan-tag--primary {
    background-color: var(--uvan-tag-primary-color);
    &.uvan-tag--plain {
      background-color: #fff;
      color: var(--uvan-tag-primary-color);
      border-color: var(--uvan-tag-primary-color);
    }
  }
  &.uvan-tag--medium {
    padding: var(--uvan-tag-medium-padding);
  }
  &.uvan-tag--large {
    padding: var(--uvan-tag-large-padding);
    font-size: var(--uvan-tag-large-font-size);
    border-radius: var(--uvan-tag-large-radius);
  }
  .uvan-tag__close {
    margin-left: 4rpx;
  }
}
</style>
