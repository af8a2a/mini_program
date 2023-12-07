<template>
    <div>
        <nut-cell title="工资管理" @click="goToPage('/pages/wage/index')"></nut-cell>
        <nut-cell title="财务管理" @click="goToPage('/pages/transaction/index')"></nut-cell>
        <nut-cell title="税收统计" @click="goToPage('/pages/table/index')"></nut-cell>
        <nut-cell title="税收统计" @click="goToPage('/pages/tax/index')"></nut-cell>

    </div>
</template>
<script setup lang="ts">
import Taro from '@tarojs/taro'

function goToPage(url) {
    Taro.navigateTo({ url })
}

</script>