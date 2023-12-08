<template>
    <nut-row>
        <nut-col>
            <nut-input v-model="name" class="nut-input-text" placeholder="请输入姓名" type="text" />
        </nut-col>
    </nut-row>
    <nut-row>
        <nut-col>
            <nut-cell title="选择日期" :desc="popupDesc" @click="show = true"></nut-cell>
        </nut-col>
    </nut-row>
    <nut-row>
        <nut-col :span="24">
            <nut-col :span="12">
                <nut-button type="primary" @click="handleSubmit" block>搜索</nut-button>
            </nut-col>
            <nut-col :span="12">
                <nut-button type="primary" @click="goToPage('/pages/wage/add')" block>添加</nut-button>
            </nut-col>

        </nut-col>
    </nut-row>

    <view class="container">
        <view class="page-body">
            <view class="page-section">
                <view class="page-section-spacing">
                    <li v-for="item in wages" :key="item.id">
                        <strong>姓名:{{ item.name }},工资:{{ item.money }},日期:{{ item.date }}</strong>
                    </li>
                </view>
            </view>
        </view>
    </view>
    <nut-popup position="bottom" v-model:visible="show">
        <nut-date-picker v-model="currentDate" type="year-month" :min-date="minDate" :max-date="maxDate"
            @confirm="popupConfirm" :is-show-chinese="true">
        </nut-date-picker>
    </nut-popup>

</template>
<script setup>

import { reactive, ref } from 'vue';
import Taro from '@tarojs/taro'
const id = ref('');
const name = ref('');
const code = ref('');
const popupDesc = ref('');
const show = ref(false);
const wages = ref([]);
const currentDate = new Date();
const minDate = new Date(2020, 0, 1);
const maxDate = new Date(2025, 10, 1);



function goToPage(url) {
    Taro.navigateTo({ url })
};
const popupConfirm = ({ selectedValue, selectedOptions }) => {
    popupDesc.value = selectedOptions.map((val) => val.text).join('');
    show.value = false;
};

async function handleSubmit() {
    await Taro.request({
        url: 'http://localhost:3000/financial/wages/list',
        method: 'POST',
        data: {
            name: name.value,
            date: currentDate,
            company: Taro.getStorageSync('company').toString()
        }
    }).then(res => {
        wages.value = res.data.list;

    }).catch((err) => {
        console.log(err);
    })

}

</script>
