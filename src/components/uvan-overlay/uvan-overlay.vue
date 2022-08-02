<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = withDefaults(defineProps<{
    modelValue: boolean
    duration: string | number
  }>(), {
	modelValue: false,
	duration: 0.3
})

// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
  (e: 'click'): void
}>()

const flag = ref<boolean>(false)

const overlayClassName = computed(() => {
	if (props.modelValue) {
		return 'uvan-overlay_show'
	}
	if (flag.value) return 'uvan-overlay_hidden'
	return ''
})

const overlayStyle = computed(() => {
	const duration = typeof props.duration === 'number' ? (props.duration + 's') : props.duration
	return {
		animationDuration: duration
	}
})

const clickOverlay = () => {
	flag.value = true
	emit('click')
}

</script>

<template>
	<view
		:class="['uvan-overlay', overlayClassName]"
		@click.stop="clickOverlay"
		:style="overlayStyle"
	>
		<slot></slot>
	</view>
</template>

<style lang="less">
  @keyframes overlay-show {
    0% {
      width: 0;
      height: 0;
      opacity: 0;
    }
    1% {
      width: 750rpx;
      height: 100%;
      opacity: 0;
    }
    100% {
      width: 750rpx;
      height: 100%;
      opacity: 1;
    }
  }
  @keyframes overlay-hidden {
    0% {
      width: 750rpx;
      height: 100%;
      opacity: 1;
    }
    99% {
      width: 750rpx;
      height: 100%;
      opacity: 0;
    }
    100% {
      width: 0;
      height: 0;
      opacity: 0;
    }
  }
  .uvan-overlay {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0;
  }
  .uvan-overlay_show {
    animation: overlay-show;
    animation-fill-mode: forwards;
  }
  .uvan-overlay_hidden {
    animation: overlay-hidden;
    animation-fill-mode: forwards;
  }
</style>
