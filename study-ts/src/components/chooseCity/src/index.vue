<template>
    <el-select v-model="province" clearable placeholder="请选择省份" size="large" style="width: 240px">
        <el-option v-for="item in areas" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>

    <el-select v-model="city" clearable :disabled="!province" placeholder="请选择城市" size="large"
        style="width: 240px; margin: 0 20px">
        <el-option v-for="item in cityArray" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>

    <el-select v-model="area" clearable :disabled="!province || !city" placeholder="请选择区域" size="large"
        style="width: 240px">
        <el-option v-for="item in areaArray" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import allDatas from '../lib/pca-code.json'

interface AreaItem {
    name: string,
    code: string,
    children?: AreaItem[]
}

interface postData {
    name: string,
    code: string
}

let areas = ref(allDatas)
let province = ref<string>('')
let cityArray = ref<AreaItem[]>([])
let city = ref<string>('')
let areaArray = ref<AreaItem[]>([])
let area = ref<string>('')

watch(province, (province, prevProvince) => {
    if (province) {
        cityArray.value = areas.value.find((item) => {
            return item.code === province
        })!.children
    }
    if (province !== prevProvince) {
        city.value = ''
        area.value = ''
    }
})

watch(
    () => city.value,
    (city, prevCity) => {
        if (city) {
            areaArray.value = cityArray.value.find((item) => {
                return item.code === city
            })!.children!
        }
        if (city !== prevCity) {
            area.value = ''
        }
    }
)

const emit = defineEmits(['change'])
watch(area, val => {
    if(!val) return
    let provinceData: postData = {
        code: province.value,
        name: province.value && areas.value.find(item => item.code === province.value)!.name
    }
    let cityData: postData = {
        code: city.value,
        name: city.value && cityArray.value.find(item => item.code === city.value)!.name
    }
    let areaData: postData = {
        code: val,
        name: val && areaArray.value.find(item => item.code === val)!.name
    }
    emit('change',{
        province:provinceData,
        city:cityData,
        area:areaData
    })
})
</script>

<style lang="scss" scoped></style>
