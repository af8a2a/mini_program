<template>
    <div>
        <nut-cell title="工资管理" @click="goToPage('/pages/wage/index')"></nut-cell>
        <nut-cell title="合同管理" @click="goToPage('/pages/contract/index')"></nut-cell>
        <nut-cell title="采购订单" @click="goToPage('/pages/purchase/index')"></nut-cell>
        <nut-cell title="发票订单" @click="goToPage('/pages/invoice/index')"></nut-cell>
        <nut-cell title="报销管理" @click="goToPage('/pages/wage/index')"></nut-cell>
        <nut-cell title="项目管理" @click="goToPage('/pages/project/index')"></nut-cell>
    </div>
</template>
<script setup lang="ts">
import Taro from '@tarojs/taro'

function goToPage(url) {
    Taro.navigateTo({ url })
}

</script>
