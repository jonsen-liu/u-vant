<script setup lang="ts">
import { computed, provide } from 'vue'

const props = withDefaults(defineProps<{
  gutter: string | number
}>(), {
	gutter: 0
})

provide('gutter', props.gutter)

const backGauge = computed(() => {
	return '-' + (Number(props.gutter) / 2) + 'rpx'
})

</script>

<template>
	<view class="uvan-row">
		<slot />
	</view>
</template>

<style lang="less" scoped>
  .uvan-row {
    margin: 0 v-bind(backGauge) 0 v-bind(backGauge);
    &::after {
      display: table;
      clear: both;
      content: '';
    }
  }
</style>
