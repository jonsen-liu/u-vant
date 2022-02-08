<script setup lang="ts">
// import { ref } from 'vue'


const handleClick = () => {
	uni.showToast({
		title: '点击了按钮'
	})
}

</script>

<template>
  <view class="demo-page">
    <view class="uvan-doc-demo-block__title">基础用法</view>
    <uvan-cell-group>
      <uvan-cell title="单元格" value="内容"/>
      <uvan-cell title="单元格" value="内容" label="描述信息" />
    </uvan-cell-group>
    <view class="uvan-doc-demo-block__title">卡片风格</view>
    <uvan-cell-group inset>
      <uvan-cell title="单元格" value="内容"/>
      <uvan-cell title="单元格" value="内容" label="描述信息" />
    </uvan-cell-group>
    <view class="uvan-doc-demo-block__title">单元格大小</view>
    <uvan-cell-group>
      <uvan-cell title="单元格" value="内容" size="large"/>
      <uvan-cell title="单元格" value="内容" label="描述信息" size="large"/>
    </uvan-cell-group>
    <view class="uvan-doc-demo-block__title">展示图标</view>
    <uvan-cell-group>
      <uvan-cell title="单元格" icon="location-o" />
    </uvan-cell-group>
  </view>
</template>

<style lang="less" scoped>
.demo-page {
  min-height: 100vh;
}
</style>