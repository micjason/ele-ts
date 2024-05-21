<template>
    <div class="header">
        <span @click="toggle">
            <el-icon-expand v-if="props"></el-icon-expand>
            <el-icon-fold v-else></el-icon-fold>
        </span>
    </div>
</template>

<script setup lang="ts">
let props = defineModel('collapse')

const toggle = () => {
    props.value = !props.value
}
</script>

<style scoped lang="scss">
.header {
   height: 60px;
   padding: 0 20px;
   display: flex;
   align-items: center;
}
</style>