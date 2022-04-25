<script setup lang="ts">
// import { ref } from 'vue'


const handleClick = () => {
	uni.showToast({
		title: '点击了按钮'
	})
}

</script>

<template>
  <div class="demo-page">
    <div class="uvan-doc-demo-block__title">基础用法</div>
    <uvan-cell-group>
      <uvan-cell title="单元格" value="内容"/>
      <uvan-cell title="单元格" value="内容" label="描述信息" />
    </uvan-cell-group>
    <div class="uvan-doc-demo-block__title">卡片风格</div>
    <uvan-cell-group inset>
      <uvan-cell title="单元格" value="内容"/>
      <uvan-cell title="单元格" value="内容" label="描述信息" />
    </uvan-cell-group>
    <div class="uvan-doc-demo-block__title">单元格大小</div>
    <uvan-cell-group>
      <uvan-cell title="单元格" value="内容" size="large"/>
      <uvan-cell title="单元格" value="内容" label="描述信息" size="large"/>
    </uvan-cell-group>
    <div class="uvan-doc-demo-block__title">展示图标</div>
    <uvan-cell-group>
      <uvan-cell title="单元格" icon="location-o" value="内容"/>
    </uvan-cell-group>
    <div class="uvan-doc-demo-block__title">只设置 value</div>
    <uvan-cell-group>
      <uvan-cell value="内容"/>
    </uvan-cell-group>
    <div class="uvan-doc-demo-block__title">展示箭头</div>
    <uvan-cell-group>
      <uvan-cell title="单元格" icon="location-o" isLink/>
      <uvan-cell title="单元格" icon="location-o" value="内容" isLink/>
      <uvan-cell title="单元格" is-link arrow-direction="down" value="内容"/>
    </uvan-cell-group>

    <div class="uvan-doc-demo-block__title">分组标题</div>
    <uvan-cell-group title="分组1">
      <uvan-cell title="单元格" value="内容" />
    </uvan-cell-group>
    <uvan-cell-group title="分组2">
      <uvan-cell title="单元格" value="内容" />
    </uvan-cell-group>

    <div class="uvan-doc-demo-block__title">使用插槽</div>
    <uvan-cell value="内容" is-link>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <span class="custom-title">单元格</span>
        <uvan-tag type="primary">标签</uvan-tag>
      </template>
    </uvan-cell>
    <uvan-cell title="单元格" icon="shop-o">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <uvan-icon name="search" class="search-icon" />
      </template>
    </uvan-cell>
  </div>
</template>

<style lang="less" scoped>
.demo-page {
  min-height: 100vh;
  .custom-title {
    margin-right: 8rpx;
  }
}
</style>