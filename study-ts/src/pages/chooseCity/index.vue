<template>
    <m-choose-city @change="getArea">选择省市区</m-choose-city>
</template>

<script setup lang="ts">
// import chooseCity from '@/components/chooseCity/src/index.vue'

const getArea = (val: any) => {
    console.log(val)
}
</script>

<style scoped></style>