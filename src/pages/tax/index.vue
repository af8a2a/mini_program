<template>
    <nut-row>
        <nut-col>
            <nut-cell title="选择日期" :desc="popupDesc" @click="show = true"></nut-cell>
        </nut-col>
    </nut-row>

    <nut-row>
        <nut-col>
            <nut-cell title="税率">
                <template #desc>
                    <nut-input-number v-model="value" step="0.1" decimal-places="1" />
                </template>
            </nut-cell>
        </nut-col>
    
    </nut-row>
    <nut-col :span="12">
            </nut-col>
    <Button type="primary" @click="handleSubmit" >搜索</Button>
    <nut-popup position="bottom" v-model:visible="show">
        <nut-date-picker v-model="currentDate" :min-date="minDate" :max-date="maxDate" @confirm="popupConfirm"
            :is-show-chinese="true">
        </nut-date-picker>
    </nut-popup>

</template>
<script setup>
import {ref } from 'vue';
import Taro from '@tarojs/taro'

const show = ref(false);
const popupDesc = ref();
const minDate = new Date(2020, 0, 1);
const maxDate = new Date(2025, 10, 1);
const currentDate = new Date(2022, 4, 10, 10, 10);
const popupConfirm = ({ selectedValue, selectedOptions }) => {
    popupDesc.value = selectedOptions.map((val) => val.text).join('');
    show.value = false;
};
function handleSubmit() {
    Taro.request({
        url: 'http://localhost:3000/financial/transaction/sum',
        method: 'POST',
        data: {
            Date: currentDate
        }
    }).then(res => {
        this.wages = res.data.list;
        console.log(this.wages.value);

    }).catch((err) => {
        console.log(err);
    })

};

const value = ref(1);
</script>
  