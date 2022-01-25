<script lang="ts" setup>
import { ref } from 'vue'

// 基础图标
const basics = ref(['arrow', 'arrow-left', 'arrow-up', 'arrow-down', 'success', 'cross', 'plus', 'minus', 'fail', 'circle'])
// 线框风格
const wireframe = ref('location-o,like-o,star-o,phone-o,setting-o,fire-o,coupon-o,cart-o,shopping-cart-o,cart-circle-o,friends-o,comment-o,gem-o,gift-o,point-gift-o,send-gift-o,service-o,bag-o,todo-list-o,balance-list-o,close,clock-o,question-o,passed,add-o,gold-coin-o,info-o,play-circle-o,pause-circle-o,stop-circle-o,warning-o,phone-circle-o,music-o,smile-o,thumb-circle-o,comment-circle-o,browsing-history-o,underway-o,more-o,video-o,shop-o,shop-collect-o,share-o,chat-o,smile-comment-o,vip-card-o,award-o,diamond-o,volume-o,cluster-o,wap-home-o,photo-o,gift-card-o,expand-o,medal-o,good-job-o,manager-o,label-o,bookmark-o,bill-o,hot-o,hot-sale-o,new-o,new-arrival-o,goods-collect-o,eye-o,delete-o,font-o,balance-o,refund-o,birthday-cake-o,user-o,orders-o,tv-o,envelop-o,flag-o,flower-o,filter-o,bar-chart-o,chart-trending-o,brush-o,bullhorn-o,hotel-o,cashier-o,newspaper-o,warn-o,notes-o,calendar-o,bulb-o,user-circle-o,desktop-o,apps-o,home-o,back-top,search,points,edit,qr,qr-invalid,closed-eye,down,scan,revoke,free-postage,certificate,logistics,contact,cash-back-record,after-sale,exchange,upgrade,ellipsis,description,records,sign,completed,failure,ecard-pay,peer-pay,balance-pay,credit-pay,debit-pay,cash-on-deliver,other-pay,tosend,pending-payment,paid,aim,discount,idcard,replay,shrink,shield-o,guide-o,cash-o'.split(','))
// 实底风格
const solid = ref(['location', 'like', 'star', 'phone', 'setting', 'fire', 'coupon', 'cart', 'shopping-cart', 'cart-circle', 'friends', 'comment', 'gem', 'gift', 'point-gift', 'send-gift', 'service', 'bag', 'todo-list', 'balance-list', 'clear', 'clock', 'question', 'checked', 'add', 'gold-coin', 'info', 'play-circle', 'pause-circle', 'stop-circle', 'warning', 'phone-circle', 'music', 'smile', 'thumb-circle', 'comment-circle', 'browsing-history', 'underway', 'more', 'video', 'shop', 'shop-collect', 'share', 'chat', 'smile-comment', 'vip-card', 'award', 'diamond', 'volume', 'cluster', 'wap-home', 'photo', 'gift-card', 'expand', 'medal', 'good-job', 'manager', 'label', 'bookmark', 'bill', 'hot', 'hot-sale', 'new', 'new-arrival', 'goods-collect', 'eye', 'delete', 'font', 'wechat', 'wechat-pay', 'alipay', 'photograph', 'youzan-shield', 'umbrella-circle', 'bell', 'printer', 'map-marked', 'card', 'add-square', 'live', 'lock', 'audio', 'graphic', 'column', 'invitation', 'play', 'pause', 'stop', 'weapp-nav', 'ascending', 'descending', 'bars', 'wap-nav', 'enlarge', 'photo-fail', 'sort'])

</script>

<template>
  <view class="demo-icon demo-page">
    <!-- <uvan-nav-bar leftArrow title="Icon"/> -->
    <view>1</view>
    <!-- 用法示例 -->
    <view class="demo-icon-main">
      <view class="uvan-doc-demo-block__title">基础用法</view>
      <view class="demo-icom-mian-group">
        <view class="demo-icom-uvan-icon">
          <uvan-icon name="chat-o" :size="64" />
        </view>
        <view class="demo-icom-uvan-icon">
          <uvan-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" :size="64" />
        </view>
      </view>
      <view class="uvan-doc-demo-block__title">徽标提示</view>
      <view class="demo-icom-mian-group">
        <view class="demo-icom-uvan-icon">
          <uvan-icon name="chat-o" :size="64" dot/>
        </view>
        <view class="demo-icom-uvan-icon">
          <uvan-icon name="chat-o" :size="64" badge="9" />
        </view>
        <view class="demo-icom-uvan-icon">
          <uvan-icon name="chat-o" :size="64" badge="99+" />
        </view>
      </view>
      <view class="uvan-doc-demo-block__title">图标颜色</view>
      <view class="demo-icom-mian-group">
        <view class="demo-icom-uvan-icon">
          <uvan-icon name="chat-o" :size="64" color="#1989fa"/>
        </view>
        <view class="demo-icom-uvan-icon">
          <uvan-icon name="fire-o" :size="64" color="#ee0a24" />
        </view>
      </view>
      <view class="uvan-doc-demo-block__title">图标大小</view>
      <view class="demo-icom-mian-group">
        <view class="demo-icom-uvan-icon">
          <uvan-icon name="chat-o" :size="64" />
        </view>
        <view class="demo-icom-uvan-icon">
          <uvan-icon name="chat-o" :size="96" />
        </view>
      </view>
    </view>
    <!-- 基础图标 -->
    <view class="demo-icon-main">
      <view class="demo-icom-mian-group">
        <view class="demo-icom-uvan-icon" v-for="item in basics" :key="item">
          <uvan-icon :name="item" :size="64"/>
          <view class="demo-icon__name">{{item}}</view>
        </view>
      </view>
    </view>
    <!-- 线框风格 -->
    <view class="demo-icon-main">
      <view class="demo-icom-mian-group">
        <view class="demo-icom-uvan-icon" v-for="item in wireframe" :key="item">
          <uvan-icon :name="item" :size="64"/>
          <view class="demo-icon__name">{{item}}</view>
        </view>
      </view>
    </view>
    <!-- 实底风格 -->
    <view class="demo-icon-main">
      <view class="demo-icom-mian-group">
        <view class="demo-icom-uvan-icon" v-for="item in solid" :key="item">
          <uvan-icon :name="item" :size="64"/>
          <view class="demo-icon__name">{{item}}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="less" scoped>
.demo-icon {
  min-height: calc(100vh);
  .demo-icon-main {
    margin: 40rpx;
    background-color: #fff;
    .demo-icom-mian-group {
      display: flex;
      flex-wrap: wrap;
      .demo-icom-uvan-icon {
        width: 25%;
        text-align: center;
        padding: 32rpx 0;
        color: var(--uvan-text-color);
        .demo-icon__name {
          color: var(--uvan-text-color);
          font-size: 24rpx;
          padding-top: 16rpx;
        }
      }
    }
  }
}
</style>