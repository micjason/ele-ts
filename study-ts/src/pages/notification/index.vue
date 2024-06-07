<template>
    <m-notification :icon="icon" :num="num" :maxNum="maxNum">
        <template #list>
            <m-list :list="list" :actions="actions" @clickItem="clickItem" @clickAction="clickAction"></m-list>
        </template>
    </m-notification>
</template>

<script setup lang="ts">
const icon: string = 'Bell'
const num: number | string = 90
const maxNum: Number = 50

import { list, actions } from './data'
const clickItem = (val: any) => {
    console.log(val)
}
const clickAction = (val: any) => {
    console.log(val)
}
</script>

<style scoped></style>