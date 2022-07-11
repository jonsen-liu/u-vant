<script lang="ts" setup>
import { computed, PropType } from 'vue'

const emit = defineEmits(['click'])

const props = defineProps({
	// 按钮类型
	type: {
		type: String as PropType<'default' | 'primary' | 'success' | 'warning' | 'danger'>,
		default: 'default'
	},

	size: {
		type: String as PropType<'normal' | 'large' | 'small' | 'mini'>,
		default: 'normal'
	},
	// 朴素按钮
	plain: {
		type: Boolean,
		default: false
	},
	// 细边框
	hairline: {
		type: Boolean,
		default: false
	},
	// 禁用状态
	disabled: {
		type: Boolean,
		default: false
	},
	// 加载状态
	loading: {
		type: Boolean,
		default: false
	},
	// 加载图标类型，可选值为 circular spinner
	loadingType: {
		type: String as PropType<'circular' | 'spinner'>,
		default: 'circular'
	},
	// 加载状态提示文字
	loadingText: {
		type: String,
		default: ''
	},
	// 是否为方形按钮
	square: {
		type: Boolean,
		default: false
	},
	// 是否为圆形按钮
	round: {
		type: Boolean,
		default: false
	},
	// icon 图
	icon: {
		type: String,
		default: ''
	},
	// 是否为块级元素
	block: {
		type: Boolean,
		default: false
	},
	// 自定义颜色
	color: {
		type: String,
		default: ''
	}
})

const className = computed(() => {
	let name = `uvan-button uvan-button--${props.type} uvan-button--${props.size}`
	if (props.plain) {
		name += ' uvan-button--plain'
	}
	if (props.hairline) name += ' uvan-button--hairline'
	if (props.disabled) name += ' uvan-button--disabled'
	if (props.loading) name += ' uvan-button--loading'
	if (props.round) name += ' uvan-button--round'
	if (props.square) name += ' uvan-button--square'
	if (props.block) name += ' uvan-button--block'
	return name
})

const styleColor = computed(() => {
	const style: Record<string, any> = {}
	if (props.color && !props.plain) {
		style.color = 'white'
		style.background = props.color
		style.borderColor = props.color
	} else if (props.color && props.plain) {
		style.color = props.color
		style.borderColor = props.color
	}
	return style
})

const clickButton = () => {
	if (!props.disabled && !props.loading) {
		emit('click')
	}
}

</script>

<template>
	<button
		:class="className"
		:style="styleColor"
		@click.stop="clickButton"
	>
		<view class="uvan-button__content">
			<template v-if="props.loading">
				<uvan-loading :type="props.loadingType" :size="40"/>
			</template>
			<template v-else>
				<view class="uvan-button__icon" v-if="props.icon">
					<uvan-icon :name="props.icon"/>
				</view>
				<view class="uvan-button__text">
					<slot/>
				</view>
			</template>
			<view
				v-if="props.loading && props.loadingText"
				class="uvan-button__laoding-text uvan-button__text"
			>
				{{props.loadingText}}
			</view>
		</view>
	</button>
</template>

<style lang="less" scoped>
@import url('./variable.less');
.uvan-button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: var(--uvan-button-default-height);
  margin: 0;
  padding: 0;
  font-size: var(--uvan-button-default-font-size);
  line-height: var(--uvan-button-default-line-height);
  text-align: center;
  color: inherit;
  border-radius: var(--uvan-button-border-radius);
  cursor: pointer;
  transition: opacity var(--uvan-animation-duration-fast);
  -webkit-appearance: none;
  background-color: #f8f8f8;
	&::after {
		position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: var(--uvan-black);
    border: inherit;
    border-color: var(--uvan-black);
    border-radius: inherit;
    transform: translate(-50%,-50%);
    opacity: 0;
    content: " ";
	}
	&:active::after {
		opacity: .1;
	}
	&.uvan-button--default {
		color: var(--uvan-button-default-color);
    background: var(--uvan-button-default-background-color);
    border: var(--uvan-button-border-width) solid var(--uvan-button-default-border-color);
	}
	&.uvan-button--primary {
    color: var(--uvan-button-primary-color);
    background: var(--uvan-button-primary-background-color);
    border: var(--uvan-button-border-width) solid var(--uvan-button-primary-border-color);
	}
	&.uvan-button--success {
    color: var(--uvan-button-success-color);
    background: var(--uvan-button-success-background-color);
    border: var(--uvan-button-border-width) solid var(--uvan-button-success-border-color);
	}
	&.uvan-button--danger {
    color: var(--uvan-button-danger-color);
    background: var(--uvan-button-danger-background-color);
    border: var(--uvan-button-border-width) solid var(--uvan-button-danger-border-color);
	}
	&.uvan-button--warn {
    color: var(--uvan-button-warning-color);
    background: var(--uvan-button-warning-background-color);
    border: var(--uvan-button-border-width) solid var(--uvan-button-warning-border-color);
	}

	&.uvan-button--plain {
		background: var(--uvan-button-plain-background-color);
		&.uvan-button--hairline {
			border-width: 0px;
			&::before {
				content: ' ';
				position: absolute;
				border: 1px solid;
				width: 200%;
				height: 200%;
				left: 0;
				top: 0;
				transform: scale(.5) translate(-50%, -50%);
				box-sizing: border-box;
			}
		}
		&.uvan-button--primary {
			color: var(--uvan-button-primary-background-color);
		}
		&.uvan-button--success {
			color: var(--uvan-button-success-background-color);
		}
		&.uvan-button--danger {
			color: var(--uvan-button-danger-background-color);
		}
		&.uvan-button--warn {
			color: var(--uvan-button-warning-background-color);
		}
	}

	&.uvan-button--disabled {
		cursor: not-allowed;
    opacity: var(--uvan-button-disabled-opacity);
		&:active::after {
			content: none;
		}
	}

	&.uvan-button--loading {
		&:active::after {
			content: none;
		}
	}

	&.uvan-button--large {
		width: 100%;
    height: var(--uvan-button-large-height);
		.uvan-button__text {
			font-size: var(--uvan-button-default-font-size);
		}
	}

	&.uvan-button--normal {
		padding: var(--uvan-button-normal-padding);
		.uvan-button__text {
			font-size: var(--uvan-button-normal-font-size);
		}
	}

	&.uvan-button--small {
		height: var(--uvan-button-small-height);
		padding: var(--uvan-button-small-padding);
		.uvan-button__text {
			font-size: var(--uvan-button-small-font-size);
		}
	}

	&.uvan-button--mini {
		height: var(--uvan-button-mini-height);
		padding: var(--uvan-button-mini-padding);
		.uvan-button__text {
			font-size: var(--uvan-button-mini-font-size);
		}
	}

	&.uvan-button--round {
		border-radius: var(--uvan-border-radius-max);
	}

	&.uvan-button--square {
		border-radius: 0px;
	}

	&.uvan-button--block {
		display: block;
		width: 100%;
	}

	.uvan-button__content {
		display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
		.uvan-button__laoding-text {
			margin-left: var(--uvan-padding-base);
		}
	}
	.uvan-button__icon,.uvan-button__text {
		display: inline-flex;
		align-items: center;
	}
	.uvan-button__icon+.uvan-button__text {
		margin-left: var(--uvan-padding-base);
	}
}
</style>
