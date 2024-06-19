<template>
    <div style="width:300px">
        <!-- <m-menu :data="data" :router="router" :defaultActive="defaultActive" :a="1"></m-menu> -->
        <m-infinite-menu :data="data" active-text-color="red"></m-infinite-menu>
        <!-- <test name="xubu">
            <template #default>徐步</template>
            <template #tom>徐步2</template>
        </test> -->
    </div>
</template>

<script setup lang="ts">
let data = [
    {
        name: '导航1',
        icon: 'Document',
        index: '1'
    },
    {
        name: '导航2',
        icon: 'Document',
        index: '2'
    }, {
        name: '导航3',
        icon: 'Document',
        index: '3',
        children: [
            {
                name: '导航3-1',
                icon: 'Document',
                index: '31',
                children: [
                    {
                        name: '导航3-1-1',
                        icon: 'Document',
                        index: '311',
                        children: [
                            {
                                name: '导航3-1-1-1',
                                icon: 'Document',
                                index: '3111'
                            }, {
                                name: '导航3-2',
                                icon: 'Document',
                                index: '3112'
                            },
                        ]
                    }, {
                        name: '导航3-2-1',
                        icon: 'Document',
                        index: '321',
                        children: [
                            {
                                name: '导航3-2-1-1',
                                icon: 'Document',
                                index: '3211'
                            }, {
                                name: '导航3-2-1-2',
                                icon: 'Document',
                                index: '3212'
                            },
                        ]
                    },
                ]
            }, {
                name: '导航3-2',
                icon: 'Document',
                index: '32'
            },
        ]
    }, {
        name: '导航4',
        icon: 'Document',
        index: '4'
    }, {
        name: '导航5',
        icon: 'Document',
        index: '5'
    },
]

let defaultActive = '2'
let router = true
</script>

<style scoped></style>