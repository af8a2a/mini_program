import { createApp } from 'vue'
import './app.scss'
import '@nutui/touch-emulator'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000'

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.config.globalProperties.$http = axios

export default App
