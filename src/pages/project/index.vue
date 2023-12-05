<template>
    <nut-form>
        <nut-form-item label="项目名称">
            <nut-input v-model="basicData.name" class="nut-input-text" placeholder="请输入姓名" type="text" />
        </nut-form-item>
        <nut-form-item label="项目类型">
            <nut-input v-model="basicData.age" class="nut-input-text" placeholder="请输入年龄" type="text" />
        </nut-form-item>
        <nut-form-item label="项目状态">
            <nut-input v-model="basicData.tel" class="nut-input-text" placeholder="请输入联系电话" type="text" />
        </nut-form-item>
        <nut-form-item v-model="basicData.address" label="项目甲方">
            <nut-input class="nut-input-text" placeholder="请输入地址" type="text" />
        </nut-form-item>
    </nut-form>
    <nut-space direction="vertical" fill>
        <nut-button type="primary" block>搜索</nut-button>
    </nut-space>
</template>
<script setup>
import { reactive } from 'vue';

const basicData = reactive({
    name: '',
    age: '',
    tel: '',
    address: ''
});
</script>
  