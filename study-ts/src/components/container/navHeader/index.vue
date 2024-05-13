<template>
    <span @click="toggle">
        <el-icon-expand v-if="props"></el-icon-expand>
        <el-icon-fold v-else></el-icon-fold>
    </span>
</template>

<script setup lang="ts">
let props = defineModel('collapse')

const toggle = () => {
   props.value = !props.value
}
</script>

<style scoped lang="scss"></style>