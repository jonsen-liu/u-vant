<script setup lang="ts">
import { computed, ref } from 'vue'
import uvanOverlay from '../uvan-overlay/uvan-overlay.vue'

const props = withDefaults(defineProps<{
    modelValue: boolean
    position: 'center' | 'top' | 'bottom' | 'right' | 'left'
    duration: number | string
    zIndex: number
  }>(), {
	modelValue: false,
	position: 'center',
	duration: 3,
	zIndex: 1
})

// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const flag = ref<boolean>(false)

const popupStyle = computed(() => {
	const duration = typeof props.duration === 'number' ? (props.duration + 's') : props.duration
	return {
		transitionDuration: duration,
		zIndex: props.zIndex
	}
})

const popupClassName = computed(() => {
	if (props.modelValue) return `uvan-popup-${props.position}__show uvan-popup-${props.position}`
	if (flag.value) return `uvan-popup-${props.position}`
	return ''
})

const clickOverlay = () => {
	flag.value = true
	emit('update:modelValue', false)
}

</script>

<template>
	<uvan-overlay
		:model-value="props.modelValue"
		:duration="props.duration"
		@click="clickOverlay"
	></uvan-overlay>
	<view :class="['uvan-popup', popupClassName]" :style="popupStyle" >
		<slot/>
	</view>
</template>

<style lang="less" scoped>
  .uvan-popup {
    overflow: hidden;
    width: 0px;
    height: 0px;
    opacity: 0;
  }
  .uvan-popup-center {
    position: fixed;
    top: 50%;
    left: 50%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
    transition: opacity;
  }
  .uvan-popup-center__show {
    opacity: 1;
  }
  .uvan-popup-top {
    position: fixed;
    width: 100%;
    height: 200rpx;
    top: 0;
    left: 0;
    // transform: translate(-50%, -50%);
    transition: opacity;
  }
  .uvan-popup-top__show {
    opacity: 1;
  }
</style>
