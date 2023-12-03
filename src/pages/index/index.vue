<template>
    <view
      class="page page-index"
      :style="rootStyle"
    >
      <!-- title -->
      <view class="page-title">财务管理系统</view>
      <!-- module list -->
      <view class="module-list">
        <view
          class="module-list__item"
          v-for="(item, index) in list"
          :key="index"
          @tap="gotoPanel(item.id)"
        >
          <view class="module-list__icon">
            <image
              class="img"
              :src="item.icon"
              mode="widthFix"
            />
          </view>
          <view class="module-list__info">
            <view class="title">{{ item.title }}</view>
            <view class="content">{{ item.content }}</view>
          </view>
          <view class="module-list__arrow">
            <text class="at-icon at-icon-chevron-right" />
          </view>
        </view>
      </view>
    </view>
  </template>
  
  <script >
  import { computed, defineComponent, reactive, toRefs } from 'vue'
  import Taro from '@tarojs/taro'
  
  import './index.scss'
  
  export default defineComponent({
    name: "IndexPage",
  
    setup() {
      const state = reactive({
        list: [
          {
            id: 'wages',
            title: '工资管理',
            content: '员工工资',
          },
          {
            id: 'contract',
            title: '合同管理',
            content: '合同信息',
          },
          {
            id: 'purchase',
            title: '采购订单',
            content: '采购订单信息',
          },
          {
            id: 'invoice',
            title: '发票订单',
            content: '发票订单信息',
          },
          {
            id: 'reimburse',
            title: '报销管理',
            content: '报销信息',
          },
          {
            id: 'project',
            title: '项目管理',
            content: '项目信息',

          }
        ]
      })
  
      const rootStyle = computed(() => {
        const deviceWidth = Taro.getSystemInfoSync().windowWidth
  
        return Taro.getEnv() === Taro.ENV_TYPE.WEB
          ? {
            width: deviceWidth >= 1024 ? '75%' : '100%',
            margin: 'auto'
          }
          : null
      })
  
      function onShareAppMessage() {
        return {
          title: 'Taro UI Vue3',
          path: '/pages/index/index',
          imageUrl:
            'http://storage.360buyimg.com/mtd/home/share1535013100318.jpg'
        }
      }
  
      function gotoPanel(id) {
        Taro.navigateTo({
          url: `/pages/panel/index?id=${id.toLowerCase()}`
        })
      }
  
      return {
        ...toRefs(state),
        rootStyle,
        gotoPanel,
        onShareAppMessage
      }
    }
  })
  </script>
  