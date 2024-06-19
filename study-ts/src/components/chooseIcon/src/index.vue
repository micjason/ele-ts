<template>
    <el-button @click="handleClick" type="primary">
        <slot></slot>
    </el-button>

    <el-dialog :title="title" v-model="visible">
        <el-scrollbar height="400px">
            <div class="container">
                <div class="item" v-for="(item, index) in Object.keys(ElIcons)" :key="index">
                    <div class="icon">
                        <component :is="`el-icon-${toLine(item)}`"></component>
                    </div>
                    <div class="text">{{ item }}</div>
                </div>
            </div>
        </el-scrollbar>
    </el-dialog>

</template>

<script setup lang="ts">

import * as ElIcons from '@element-plus/icons-vue'
import { toLine } from '@/utils/index.js'

let props = defineProps<{
    // 弹出框的标题
    title: string
}>()

// 控制弹出框的显示隐藏
let visible = defineModel()

const handleClick = () => {
    visible.value = !visible.value
}


</script>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .item {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        cursor: pointer;

        .icon {
            font-size: 28px;
        }
    }
}
</style>