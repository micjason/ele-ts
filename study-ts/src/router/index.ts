import { createRouter,createWebHashHistory,RouteRecordRaw } from "vue-router";
import home from "@/pages/home.vue";
import chooseIcon from '@/pages/chooseIcon/index.vue'
import chooseCity from '@/pages/chooseCity/index.vue'
const routes:Array<RouteRecordRaw>=[
    {
        path:'/',
        component:home,
        children:[
            {
                path:'/chooseIcon',
                component:chooseIcon
            },
            {
                path:'/chooseCity',
                component:chooseCity
            }
        ]
    }
]

const router = createRouter({
    routes,
    history:createWebHashHistory()
})

export default router