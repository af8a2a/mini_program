<template>
    <nut-cell title="选择日期" :desc="popupDesc" @click="show = true"></nut-cell>
    <nut-popup position="bottom" v-model:visible="show">
      <nut-date-picker
        v-model="currentDate"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="popupConfirm"
        :is-show-chinese="true"
      >
        <nut-button block type="primary" @click="alwaysFun">永远有效</nut-button>
      </nut-date-picker>
    </nut-popup>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const show = ref(false);
  const popupDesc = ref();
  const minDate = new Date(2020, 0, 1);
  const maxDate = new Date(2025, 10, 1);
  const currentDate = new Date(2022, 4, 10, 10, 10);
  const popupConfirm = ({ selectedValue, selectedOptions }) => {
    popupDesc.value = selectedOptions.map((val) => val.text).join('');
    show.value = false;
  };
  const alwaysFun = () => {
    popupDesc.value = '永远有效';
    show.value = false;
  };
  </script>
  