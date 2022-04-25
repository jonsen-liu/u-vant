<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
onLaunch(() => {
	// console.log('App Launch')
})
onShow(() => {
	// console.log('App Show')
})
onHide(() => {
	// console.log('App Hide')
})
</script>
<style>
@import url('./styles/root.css');
@import url('./styles/base.css');
/* #ifdef H5 */
* {
	font-family: var(--uvan-base-font-family);
}
/* #endif */
/* #ifndef H5 */
page {
  font-family: var(--uvan-base-font-family);
}
/* #endif */

.demo-page {
	background-color: #f7f8fa;
  padding-bottom:calc(50rpx + constant(safe-area-inset-bottom));
  padding-bottom:calc(50rpx + env(safe-area-inset-bottom))
}
.uvan-doc-demo-block__title {
	margin: 0;
  padding: 64rpx 32rpx 32rpx;
  color: rgba(69,90,100,.6);
  font-weight: 400;
  font-size: 28rpx;
  line-height: 32rpx;
}
</style>
