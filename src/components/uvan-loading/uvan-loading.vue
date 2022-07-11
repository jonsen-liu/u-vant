<script lang="ts" setup>
import { computed, PropType } from 'vue'

const props = defineProps({
	color: {
		type: String,
		default: ''
	},
	type: {
		type: String as PropType<'circular' | 'spinner'>,
		default: 'circular'
	},
	// 加载图标大小，默认单位为 rpx
	size: {
		type: [Number, String],
		default: ''
	},
	// 垂直排序
	vertical: {
		type: Boolean,
		default: false
	},
	// 文案颜色
	textColor: {
		type: String,
		default: '#c9c9c9'
	}
})

const uvanLoadingStyle = computed(() => {
	const style: Record<string, any> = { }
	if (props.color) {
		style['--uvan-loading-spinner-color'] = props.color
	}
	if (props.size) {
		if (typeof props.size === 'string') {
			style['--uvan-loading-spinner-size'] = props.size
		} else {
			style['--uvan-loading-spinner-size'] = props.size + 'rpx'
		}
	}
	return style
})

const borderSize = computed(() => {
	if (typeof props.size === 'string') {
		if (!props.size) return '2px'
		if (props.size.includes('rpx')) {
			return parseInt(props.size) / 2 / 10 + 'px'
		}
		return parseInt(props.size) / 10 + 'px'
	}
	const size = props.size / 2 / 10 + 'px'
	return size
})

const loadingTextColor = computed(() => {
	if (props.color) {
		return {
			color: props.color
		}
	} else if (props.textColor) {
		return {
			color: props.textColor
		}
	}
	return {}
})

</script>
<template>
	<view
		:class="{
			'uvan-loading': true,
			'uvan-loading--vertical': props.vertical
		}"
		:style="uvanLoadingStyle"
	>
		<view :class="['uvan-loading__spinner', 'uvan-loading--' + props.type]">
			<template v-if="props.type === 'spinner'">
				<text class="uvan-loading__line uvan-loading__line--1"></text>
				<text class="uvan-loading__line uvan-loading__line--2"></text>
				<text class="uvan-loading__line uvan-loading__line--3"></text>
				<text class="uvan-loading__line uvan-loading__line--4"></text>
				<text class="uvan-loading__line uvan-loading__line--5"></text>
				<text class="uvan-loading__line uvan-loading__line--6"></text>
				<text class="uvan-loading__line uvan-loading__line--7"></text>
				<text class="uvan-loading__line uvan-loading__line--8"></text>
				<text class="uvan-loading__line uvan-loading__line--9"></text>
				<text class="uvan-loading__line uvan-loading__line--10"></text>
				<text class="uvan-loading__line uvan-loading__line--11"></text>
				<text class="uvan-loading__line uvan-loading__line--12"></text>
			</template>
		</view>
		<text v-if="$slots.default" class="uvan-loading__text" :style="loadingTextColor">
			<slot></slot>
		</text>
	</view>
</template>

<style lang="less" scoped>
@import url('./variable.less');
.uvan-loading {
  position: relative;
  display: inline-flex;
  align-items: center;
  &.uvan-loading--vertical {
    // align-items: ;
    flex-direction: column;
    .uvan-loading__text {
      margin: var(--uvan-padding-xs) 0 0;
    }
  }
  .uvan-loading__text {
    display: inline-block;
    margin-left: var(--uvan-padding-xs);
    color: var(--uvan-loading-text-color);
    font-size: var(--uvan-loading-text-font-size);
    vertical-align: middle;
  }
  .uvan-loading__spinner {
    display: inline-block;
    width: var(--uvan-loading-spinner-size);
    height: var(--uvan-loading-spinner-size);
    color: var(--uvan-loading-spinner-color);
    border-radius: 50%;
    animation-name: circularCartoon;
    animation-duration: var(--uvan-loading-spinner-animation-duration);
    animation-iteration-count: infinite;
    &.uvan-loading--circular {
      border: v-bind(borderSize) solid transparent;
      border-top-color: var(--uvan-loading-spinner-color);
      border-radius: 50%;
      background-color: transparent;
      animation-timing-function: ease-in-out;
      @keyframes circularCartoon {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
    &.uvan-loading--spinner {
      animation-timing-function: linear;
      animation-timing-function: steps(12);
      .uvan-loading__line {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        &::before {
          display: block;
          width: 2px;
          height: 25%;
          margin: 0 auto;
          background-color: var(--uvan-loading-spinner-color);
          border-radius: 40%;
          content: " ";
        }
      }
      .uvan-loading__line--1 {
        transform: rotate(30deg);
        opacity: 1;
      }
      .uvan-loading__line--2 {
        transform: rotate(60deg);
        opacity: .9375;
      }
      .uvan-loading__line--3 {
        transform: rotate(90deg);
        opacity: .875;
      }
      .uvan-loading__line--4 {
        transform: rotate(120deg);
        opacity: .8125;
      }
      .uvan-loading__line--5 {
        transform: rotate(150deg);
        opacity: .75;
      }
      .uvan-loading__line--6 {
        transform: rotate(180deg);
        opacity: .6875;
      }
      .uvan-loading__line--7 {
        transform: rotate(210deg);
        opacity: .625;
      }
      .uvan-loading__line--8 {
        transform: rotate(240deg);
        opacity: .5625;
      }
      .uvan-loading__line--9 {
        transform: rotate(270deg);
        opacity: .5;
      }
      .uvan-loading__line--10 {
        transform: rotate(300deg);
        opacity: .4375;
      }
      .uvan-loading__line--11 {
        transform: rotate(330deg);
        opacity: .375;
      }
      .uvan-loading__line--12 {
        transform: rotate(360deg);
        opacity: .3125;
      }
    }
  }
}
</style>
