<template>
    <!-- <el-menu :collapse="collapse" class="el-menu-vertical-demo">
        <el-menu-item index="1">
            <el-icon-menu></el-icon-menu>
            <span class="text">首页</span>
        </el-menu-item>
        <el-menu-item index="2">
            <el-icon-menu></el-icon-menu>
            <span class="text">图标选择器</span>
        </el-menu-item>
        <el-menu-item index="3">
            <el-icon-menu></el-icon-menu>
            <span class="text">趋势标记</span>
        </el-menu-item>
    </el-menu> -->
    <m-infinite-menu class="el-menu-vertical-demo" :collapse="collapse" :data="data" router
        default-active="/"></m-infinite-menu>
        <!-- <m-menu class="el-menu-vertical-demo" :collapse="collapse" :data="data" router
        default-active="/"></m-menu> -->
</template>

<script setup lang="ts">
let props = defineProps<{
    collapse: boolean
}>()
// console.log('props', props.collapse)

let data = [
    {
        icon: 'menu',
        name: '首页',
        index: '/'
    },
    {
        icon: 'menu',
        name: '图标选择器',
        index: '/chooseIcon'
    },
    {
        icon: 'menu',
        name: '趋势标记',
        index: '/trend'
    },
    {
        icon: 'menu',
        name: 'menu菜单',
        index: '/menu'
    },
    {
        icon: 'menu',
        name: '省市区',
        index: '/chooseCity'
    },

]
</script>

<style scoped lang="scss">
.el-menu-vertical-demo {
    &:not(.el-menu--collapse) {
        width: 200px;
    }

    .text {
        margin-left: 10px;
    }
}

</style>