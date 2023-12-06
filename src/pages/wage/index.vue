<template>
    <nut-form>
        <nut-form-item label="姓名">
            <nut-input v-model="name" class="nut-input-text" placeholder="请输入姓名" type="text" />
        </nut-form-item>
        <nut-form-item label="工号">
            <nut-input v-model="code" class="nut-input-text" placeholder="请输入工号" type="text" />
        </nut-form-item>
    </nut-form>
    <nut-row>
        <nut-col :span="24">
            <nut-col :span="12">
                <nut-button type="primary" @click="handleSubmit" block>搜索</nut-button>
            </nut-col>
            <nut-col :span="12">
                <nut-button type="primary" @click="handleSubmit" block>添加</nut-button>
            </nut-col>

        </nut-col>
    </nut-row>

    <view class="container">
        <view class="page-body">
            <view class="page-section">
                <view class="page-section-spacing">
                    <li v-for="item in wages" :key="item.id">
                        <strong>姓名:{{ item.empName }},工资:{{ item.finalWage }},日期:{{ item.issuingDate }}</strong>
                    </li>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
import { Dongdong } from '@nutui/icons-vue-taro';
import { Card } from '@nutui/nutui-taro';

import { reactive, ref } from 'vue';
import Taro from '@tarojs/taro'
export default {
    data() {
        return {
            id: '',
            name: '',
            code: '',
            tel: '',
            dept: '',
            wages: []
        }

    },
    methods: {
        handleSubmit() {
            Taro.request({
                url: 'http://localhost:3000/financial/wages/list',
                method: 'GET',
            }).then(res => {
                this.wages=res.data.list;
                console.log(this.wages.value);

            }).catch((err) => {
                console.log(err);
            })

        }

    }
}
// const wages = ref([
//     {
//         id: 1,
//         name: '张三',
//         code: '001',
//         tel: '12345678901',
//         dept: '研发部',
//         finalWage: 5000,
//     },
//     {
//         id: 2,
//         name: '张三',
//         code: '001',
//         tel: '12345678901',
//         dept: '研发部',
//         finalWage: 3000
//     },
// ]);

</script>
<style>
.scroll-view-item {
    height: 300rpx;
}

.scroll-view-item_H {
    display: inline-block;
    width: 100%;
    height: 300rpx;
}

.demo-text-1 {
    background: #ccc;
}

.demo-text-2 {
    background: #999;
}

.demo-text-3 {
    background: #666;
}
</style>


