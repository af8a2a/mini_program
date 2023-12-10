
<template>
    <nut-form>
        <nut-form-item label="用户名">
            <nut-input v-model="username" class="nut-input-text" placeholder="请输入用户名" type="text" />
        </nut-form-item>
        <nut-form-item label="密码">
            <nut-input v-model="password" class="nut-input-text" placeholder="请输入密码" type="password" />
        </nut-form-item>
        <nut-form-item label="公司">
            <nut-input v-model="company" class="nut-input-text" placeholder="请输入公司" type="text" />
        </nut-form-item>
    </nut-form>
    <nut-space direction="vertical" fill>
        <nut-button type="primary" @click="Login" block>登录</nut-button>
        <nut-button type="primary" @click="Register" block>注册</nut-button>

    </nut-space>
</template>
<script setup>
import { reactive, ref } from 'vue';
import Taro from '@tarojs/taro'
const username = ref('')
const password = ref('')
const company = ref('')
function Register() {
    if (username == '' || password == ''||company=='') {
        //todo throw
    }
    else {
        Taro.request({
            method: 'POST',
            url: 'http://localhost:3000/financial/user/register',
            data: {
                username: username.value,
                password: password.value,
                company: company.value,
                type:'guest'
            }
        })
        Taro.navigateTo({ url: '/pages/index/index' });
    }
    
}
function Login() {
    if (username == '' && password == '') {
        //todo throw
    }
    else if (username == '') {

    }
    else if (password == '') {

    } 
    else if (company.value == 'admin') {
        const arr = Taro.request({
            method: 'POST',
            url: 'http://localhost:3000/financial/user/login',
            data: {
                username: username,
                password: password,
            }
        })
        try {
            Taro.setStorage({
                key: "company",
                data: company.value
            })

        } catch (error) {
            console.log(error);
        }
        Taro.navigateTo({ url: '/pages/admin/index' });

    }

    else {
        const arr = Taro.request({
            method: 'POST',
            url: 'http://localhost:3000/financial/user/login',
            data: {
                username: username,
                password: password,
            }
        })
        try {
            Taro.setStorage({
                key: "company",
                data: company.value
            })

        } catch (error) {
            console.log(error);
        }
        Taro.navigateTo({ url: '/pages/home/index' });
    }
}
</script>