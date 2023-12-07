<template>
    <view class="bar-chart ">
        <EChart ref="canvas" />
    </view>
</template>
  
<script setup>
import { ref, onMounted } from "vue";
import Taro from "@tarojs/taro";
import { EChart } from "echarts4taro3";
const canvas = ref(null);
const options = {
    title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left'
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}


onMounted(() => {
    const echartComponentInstance = canvas.value; // 组件实例
    Taro.request({
        url: "http://localhost:3000/financial/transaction/data",
        method: "GET",
    }).then((res) => {
        options.series[0].data = res.data.list;
        // let firstValue = options.series[0].data.shift();
        // options.series[0].data.push(firstValue);

    })
    echartComponentInstance.refresh(options).then((myChart) => {
        myChart.setOption(options);
    });

    // myChart 即为 echarts 实例，可使用的实例方法，具体可参考 echarts 官网

});
</script>
  
<style>
.bar-chart {
    width: 100%;
    height: 100vh;
}
</style>
