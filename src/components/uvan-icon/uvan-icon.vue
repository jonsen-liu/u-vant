<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  // 图标名称或图片链接
  name: {
    type: String,
    required: true
  },
  // 	图标颜色
  color: {
    type: String,
    default: 'inherit'
  },
  // 图标大小，如 20px 2em，默认单位为 rpx
  size: {
    type: [String, Number],
    default: 'inherit'
  },
  // 类名前缀，用于使用自定义图标
  classPrefix: {
    type: String,
    default: 'uvan-icon'
  },
  // 是否显示图标右上角小红点
  dot: {
    type: Boolean,
    default: false
  },
  // 图标右上角徽标的内容
  badge: {
    type: [String, Number]
  },
  // 自定义徽标的属性，传入的对象会被透传给 Badge 组件的 props
  badgeProps: {
    type: [String, Number]
  }
})

const iconStyle = computed(()=> {
  let style: Record<string, string> = {}
  if (props.color !== 'inherit') style.color = props.color
  if (props.size !== 'inherit') {
    if (typeof props.size === "number") {
      style.size = props.size + 'rpx'
    } else {
      style.size = props.size
    }
  }
  return style
})
</script>

<template>
  <text :class="[props.classPrefix, name]"></text>
</template>

<style lang="less" scoped>
@import url('../iconfont/iconfont.css');
</style>