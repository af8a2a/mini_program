<template>
    <nut-cell title="选择日期" :desc="popupDesc" @click="show = true"></nut-cell>
    <nut-popup position="bottom" v-model:visible="show">
        <nut-date-picker v-model="currentDate" type="year-month" :min-date="minDate" :max-date="maxDate"
            @confirm="popupConfirm" :is-show-chinese="true">
            <nut-button block type="primary" @click="fetchTransaction">确认</nut-button>
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
<script>
import { DatePicker } from '@nutui/nutui-taro';
import { reactive } from 'vue';
import Taro from '@tarojs/taro'

export default {
    data() {
        return {
            show: false,
            minDate: new Date(2020, 0, 1),
            maxDate: new Date(2025, 10, 1),
            currentDate: new Date(2022, 4, 10, 10, 10),
            transactions:[],
        }
    },
    methods: {
        fetchTransaction() {
            this.show = false;

            Taro.request({
                url: 'http://localhost:3000/financial/transaction/list',
                method: 'GET',
            }).then(res => {
                this.transactions = res.data.list;
                console.log(this.transactions);
            }).catch((err) => {
                console.log(err);
            })
        }
    }
}
</script>
  