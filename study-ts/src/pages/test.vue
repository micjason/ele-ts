<template>
   <div>123</div>
</template>

<script setup>
let a = null
const aa = async ()=>{
    a = 1
}
const bb = await aa()
// console.log('bb',bb)
console.log('a',a)
</script>

<style scoped>

</style>