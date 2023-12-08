<template>
    <nut-row>
        <nut-col>
            <nut-input placeholder="请输入名称" v-model="name" />
        </nut-col>
    </nut-row>
    <nut-row>
        <nut-col>
            <nut-input placeholder="请输入金额（支持小数)" v-model="number" type="digit" />
        </nut-col>
    </nut-row>
    <nut-row>
        <nut-col>
            <nut-cell title="选择日期" :desc="popupDesc" @click="show = true"></nut-cell>
        </nut-col>
    </nut-row>


    <nut-row>
        <nut-col>
            <nut-button type="primary" @click="submitTransaction" block>提交</nut-button>
        </nut-col>
    </nut-row>

    <nut-popup position="bottom" v-model:visible="show">
        <nut-date-picker v-model="currentDate" type="year-month" :min-date="minDate" :max-date="maxDate"
            @confirm="popupConfirm" :is-show-chinese="true">
        </nut-date-picker>
    </nut-popup>
</template>
<script setup>
import { ref, } from 'vue';
import Taro from '@tarojs/taro'

const name = ref('');
const number = ref('');
const value = ref(['收入']);
const columns = ref([
    { text: '收入', value: '收入' },
    { text: '支出', value: '支出' },
]);
const desc = ref();
const popupDesc = ref();
const show_type = ref(false);
const show = ref(false);
const currentDate = new Date();
const minDate = new Date(2020, 0, 1);
const maxDate = new Date(2025, 10, 1);
const confirm = ({ selectedValue, selectedOptions }) => {
    desc.value = selectedOptions.map((val) => val.text).join(',');
    show_type.value = false;
};


const popupConfirm = ({ selectedValue, selectedOptions }) => {
    popupDesc.value = selectedOptions.map((val) => val.text).join('');
    show.value = false;
};

const submitTransaction = () => {
    Taro.request({
        url: 'http://localhost:3000/financial/wages/add',
        method: 'POST',
        data: {
            name: name.value,
            money: number.value,
            issuing_date: currentDate,
            type: value.value.toString(),
            company:Taro.getStorageSync('company').toString(),
        }
    }).then(res => {
        Taro.navigateBack();
    }).catch((err) => {
        console.log(err);
    })
}

</script>
  