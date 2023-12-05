<template>
    <nut-form>
        <nut-form-item label="姓名">
            <nut-input v-model="basicData.name" class="nut-input-text" placeholder="请输入姓名" type="text" />
        </nut-form-item>
        <nut-form-item label="工号">
            <nut-input v-model="basicData.code" class="nut-input-text" placeholder="请输入工号" type="text" />
        </nut-form-item>
        <nut-form-item label="联系电话">
            <nut-input v-model="basicData.tel" class="nut-input-text" placeholder="请输入联系电话" type="text" />
        </nut-form-item>
        <nut-form-item v-model="basicData.dept" label="部门">
            <nut-input class="nut-input-text" placeholder="请输入部门" type="text" />
        </nut-form-item>
    </nut-form>
    <nut-space direction="vertical" fill>
        <nut-button type="primary" @click="handleSubmit" block>搜索</nut-button>
    </nut-space>
</template>
<script setup>
import { reactive } from 'vue';
import axios from 'axios';

const basicData = reactive({
    id: '',
    name: '',
    code: '',
    tel: '',
    dept: ''
});

const handleSubmit = async () => {
    try {
        //todo
        // 替换成你的后端API URL
        const response = await this.$http.get('financial/wages/list', basicData);
        // 处理后端返回的数据
        console.log(response.data);
    } catch (error) {
        // 错误处理
        console.error('请求失败:', error);
    }
};

</script>
  