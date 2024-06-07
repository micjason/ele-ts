<template>
    <m-menu :data="data1"></m-menu>
</template>

<script setup lang="ts">
let data1 = [
    {
        name: '导航1',
        icon: 'document',
        index: '1'
    },
    {
        name: '导航2',
        icon: 'document',
        index: '2'
    }, {
        name: '导航3',
        icon: 'document',
        index: '3',
        children: [
            {
                name: '导航3-1',
                icon: 'document',
                index: '31'
            }, {
                name: '导航3-2',
                icon: 'document',
                index: '32'
            },
        ]
    }, {
        name: '导航4',
        icon: 'document',
        index: '4'
    }, {
        name: '导航5',
        icon: 'document',
        index: '5'
    },
]
</script>

<style scoped></style>