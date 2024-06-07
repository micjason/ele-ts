import { createRouter,createWebHashHistory,RouteRecordRaw } from "vue-router";
import home from "@/pages/home.vue";
import chooseIcon from '@/pages/chooseIcon/index.vue'
import chooseCity from '@/pages/chooseCity/index.vue'
import trend from '@/pages/trend/index.vue'
import notification from '@/pages/notification/index.vue'
import menu from '@/pages/menu/index.vue'
import test from '@/pages/test.vue'
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
            },
            {
                path:'/trend',
                component:trend
            },
            {
                path:'/notification',
                component:notification
            },
            {
                path:'/menu',
                component:menu
            }
        ]
    },
    {
        path:'/test',
        component:test,
    }
]

const router = createRouter({
    routes,
    history:createWebHashHistory()
})

export default router