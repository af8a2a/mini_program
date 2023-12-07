<template>
        <nut-row>
        <nut-col>
            <nut-cell title="选择日期" :desc="popupDesc" @click="show = true"></nut-cell>
        </nut-col>
    </nut-row>
    <nut-row>
        <nut-col>
            <nut-cell title="请选择类型" :desc="desc" @click="show_type = true"></nut-cell>
        </nut-col>
    </nut-row>
    <nut-row>
        <nut-col>
            <nut-button type="primary" @click="fetchTransaction" block>查询</nut-button>
        </nut-col>
    </nut-row>

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

    <nut-popup position="bottom" v-model:visible="show_type">
        <nut-picker v-model="value" :columns="columns" title="请选择类型" @confirm="confirm" @cancel="show_type = false">
        </nut-picker>
    </nut-popup>
</template>
<script setup>
import { DatePicker } from '@nutui/nutui-taro';

import { ref } from 'vue';
import Taro from '@tarojs/taro'
const value = ref(['收入']);
const columns = ref([
    { text: '收入', value: '收入' },
    { text: '支出', value: '支出' },
]);
const desc = ref();
const show_type = ref(false);
const show = ref(false);
const popupDesc = ref();
const minDate = new Date(2020, 0, 1);
const maxDate = new Date(2025, 10, 1);
const currentDate = new Date();
const transactions = ref([]);

const confirm = ({ selectedValue, selectedOptions }) => {
  desc.value = selectedOptions.map((val) => val.text).join(',');
  show_type.value = false;
};


const popupConfirm = ({ selectedValue, selectedOptions }) => {
    popupDesc.value = selectedOptions.map((val) => val.text).join('');
    show.value = false;
};

const fetchTransaction = () => {
    Taro.request({
        url: 'http://localhost:3000/financial/transaction/list',
        method: 'POST',
        data: {
            date: currentDate,
            type: value.value.toString()
        }
    }).then(res => {
        transactions.value = res.data.list;
        console.log(this.transactions);
    }).catch((err) => {
        console.log(err);
    })
}


</script>
  