<template>
    <nut-cell title="选择日期" :desc="popupDesc" @click="show = true"></nut-cell>
    <nut-popup position="bottom" v-model:visible="show">
        <nut-date-picker v-model="currentDate" type="year-month" :min-date="minDate" :max-date="maxDate"
            @confirm="popupConfirm" :is-show-chinese="true">
        </nut-date-picker>
    </nut-popup>
    <view class="container">
        <view class="page-body">
            <view class="page-section">
                <view class="page-section-spacing">
                    <li v-for="item in transactions" :key="item.date">
                        <strong>明细:{{ item.name }},变动:{{ item.incoming }},日期:{{ item.date }}</strong>
                    </li>
                </view>
            </view>
        </view>
    </view>
</template>
<script setup>
import { DatePicker } from '@nutui/nutui-taro';

import { ref } from 'vue';
import Taro from '@tarojs/taro'


const show = ref(false);
const popupDesc = ref();
const minDate = new Date(2020, 0, 1);
const maxDate = new Date(2025, 10, 1);
const currentDate = new Date(2023, 4, 10, 10, 10);
const transactions = ref([]);
const popupConfirm = ({ selectedValue, selectedOptions }) => {
    popupDesc.value = selectedOptions.map((val) => val.text).join('');
    fetchTransaction();
    show.value = false;
};

const fetchTransaction = () => {
    Taro.request({
        url: 'http://localhost:3000/financial/transaction/list',
        method: 'GET',
        data: {
            issuingDate: currentDate
        }
    }).then(res => {
        transactions.value = res.data.list;
        console.log(this.transactions);
    }).catch((err) => {
        console.log(err);
    })
}


</script>
  