<script setup lang="ts">
import { ref } from 'vue'

const show = ref(true)

const close = () => {
	show.value = false
}

</script>

<template>
  <div class="demo-page">
    <div class="uvan-doc-demo-block__title">基础用法</div>
    <uvan-cell-group>
      <uvan-cell title="default 类型">
        <template #right-icon>
          <uvan-tag>标签</uvan-tag>
        </template>
      </uvan-cell>
      <uvan-cell title="primary 类型">
        <template #right-icon>
          <uvan-tag type="primary">标签</uvan-tag>
        </template>
      </uvan-cell>
      <uvan-cell title="success 类型">
        <template #right-icon>
          <uvan-tag type="success">标签</uvan-tag>
        </template>
      </uvan-cell>
      <uvan-cell title="danger 类型">
        <template #right-icon>
          <uvan-tag type="danger">标签</uvan-tag>
        </template>
      </uvan-cell>
      <uvan-cell title="warning 类型">
        <template #right-icon>
          <uvan-tag type="warning">标签</uvan-tag>
        </template>
      </uvan-cell>
    </uvan-cell-group>
    
    <div class="uvan-doc-demo-block__title">样式风格</div>
    <uvan-cell-group>
      <uvan-cell title="空心样式">
        <template #right-icon>
          <uvan-tag plain type="primary">标签</uvan-tag>
        </template>
      </uvan-cell>
      <uvan-cell title="圆角样式">
        <template #right-icon>
          <uvan-tag round type="primary">标签</uvan-tag>
        </template>
      </uvan-cell>
      <uvan-cell title="标记样式">
        <template #right-icon>
          <uvan-tag mark type="success">标签</uvan-tag>
        </template>
      </uvan-cell>
      <uvan-cell title="可关闭标签">
        <template #right-icon>
          <uvan-tag
            closeable
            type="danger"
            size="medium"
            :show="show"
            @close="close"
          >标签</uvan-tag>
        </template>
      </uvan-cell>
    </uvan-cell-group>
    
    <div class="uvan-doc-demo-block__title">标签大小</div>
    <uvan-cell-group>
      <uvan-cell title="小号标签">
        <template #right-icon>
          <uvan-tag type="primary">标签</uvan-tag>
        </template>
      </uvan-cell>
      <uvan-cell title="中号标签">
        <template #right-icon>
          <uvan-tag size="medium" type="primary">标签</uvan-tag>
        </template>
      </uvan-cell>
      <uvan-cell title="大号标签">
        <template #right-icon>
          <uvan-tag size="large" type="primary">标签</uvan-tag>
        </template>
      </uvan-cell>
    </uvan-cell-group>
    
    <div class="uvan-doc-demo-block__title">自定义颜色</div>
    <uvan-cell-group>
      <uvan-cell title="背景颜色">
        <template #right-icon>
          <uvan-tag color="#7232dd">标签</uvan-tag>
        </template>
      </uvan-cell>
      <uvan-cell title="文字颜色">
        <template #right-icon>
          <uvan-tag color="#ffe1e1" text-color="#ad0000">标签</uvan-tag>
        </template>
      </uvan-cell>
      <uvan-cell title="大号标签">
        <template #right-icon>
          <uvan-tag color="#7232dd" plain type="primary">标签</uvan-tag>
        </template>
      </uvan-cell>
    </uvan-cell-group>
  </div>
</template>

<style lang="less" scoped>
.demo-page {
  min-height: 100vh;
}
</style>