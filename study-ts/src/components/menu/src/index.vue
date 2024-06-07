<template>
    menu
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { MenuItem } from './types'
let props = defineProps({
    data: {
        type: Array as PropType<MenuItem[]>,
        required: true
    }
})
console.log(123, props.data)
</script>

<style lang="scss" scoped></style>