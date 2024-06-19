<template>
    <div>
        <el-menu :router="router" :default-active="defaultActive" v-bind="$attrs">
            <template v-for="(item, index) in data" :key="index">
                <el-sub-menu v-if="item.children && item.children.length" :index="item.index">
                    <template #title>
                        <component :is="`el-icon-${toLine(item.icon)}`"></component>
                        <span>{{ item.name }}</span>
                    </template>
                    <el-menu-item v-for="(item1, index1) in item.children" :key="index1">
                        <component :is="`el-icon-${toLine(item1.icon)}`"></component>
                        <span>{{ item1.name }}</span>

                       
                        <!-- <el-sub-menu v-if="item1.children && item1.children.length" :index="item1.index">
                        <template #title>
                                <component :is="`el-icon-${toLine(item1.icon)}`"></component>
                                <span>{{ item1.name }}</span>
                            </template>
                            <el-menu-item v-for="(item2, index2) in item1.children" :key="index1">
                                ...
                                无限层级的假代码
                            </el-menu-item>
                        </el-sub-menu>
                        <el-menu-item v-if="!item1.children || !item1.children.length" :index="item1.index">
                            <component :is="`el-icon-${toLine(item1.icon)}`"></component>
                            <span>{{ item1.name }}</span>
                        </el-menu-item>    
 -->
                    </el-menu-item>
                </el-sub-menu>
                <el-menu-item v-if="!item.children || !item.children.length" :index="item.index">
                    <component :is="`el-icon-${toLine(item.icon)}`"></component>
                    <span>{{ item.name }}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { MenuItem } from './types'
import { toLine } from '@/utils/index'
let props = defineProps({
    data: {
        type: Array as PropType<MenuItem[]>,
        required: true
    },
    defaultActive: {
        type: String,
        default: ''
    },
    router: {
        type: Boolean,
        default: false
    },
})
console.log(123, props.data)
</script>

<style lang="scss" scoped>

</style>