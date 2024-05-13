import { createRouter,createWebHashHistory,RouteRecordRaw } from "vue-router";
import layout from "../pages/layout.vue";
import container from '@/components/container/src/index.vue'
const routes:Array<RouteRecordRaw>=[
    {
        path:'/',
        component:container,
        children:[
            {
                path:'/',
                component:layout
            }
        ]
    }
]

const router = createRouter({
    routes,
    history:createWebHashHistory()
})

export default router