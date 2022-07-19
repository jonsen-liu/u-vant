<script setup lang="ts">
import { computed, inject, onMounted } from 'vue'

const injectGutter = inject('gutter')
const props = withDefaults(defineProps<{
  span: string | number
	offset: string | number
}>(), {

})

// const options = {
// 	virtualHost: true
// }

const classNameSpan = computed(() => {
	if (!props.span) return ''
	return `uvan-col--${props.span}`
})

const classNameOffset = computed(() => {
	if (!props.offset) return ''
	return `uvan-col--offset-${props.offset}`
})

const colStyle = computed(() => {
	const n = Number(injectGutter) / 2
	return `padding: 0 ${n}rpx 0 ${n}rpx`
})

onMounted(() => {
	console.log(injectGutter)
})

</script>

<template>
	<view :class="['uvan-col', classNameSpan, classNameOffset]" :style="colStyle">
		<slot/>
	</view>
</template>

<style lang="less" scoped>
	@import './uvan-col.less';
  .uvan-col {
		float: left;
		box-sizing: border-box;
		min-height: 1px;
  }
</style>
