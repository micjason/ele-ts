import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index.js'
import * as Icons from '@element-plus/icons-vue'
import { toLine } from './utils/index.js'
import mUI from '@/components/index.ts'

const app = createApp(App)

// 全局注册图标 牺牲一点性能
for (let i in Icons) {
    app.component(`el-icon-${toLine(i)}`,(Icons as any)[i])
}

app.use(router).use(ElementPlus).use(mUI)
app.mount('#app')
