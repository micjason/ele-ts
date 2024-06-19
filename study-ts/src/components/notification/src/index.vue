<template>

   <el-popover placement="bottom" :width="400" trigger="click">
      <template #reference>
         <el-badge :value="num" :max="maxNum">
            <component :is="`el-icon-${toLine(icon)}`"></component>
         </el-badge>
      </template>
      <slot name="list"></slot>
   </el-popover>


</template>

<script setup lang="ts">
import { toLine } from '@/utils/index'
const props = defineProps({
   // 自定义图标
   icon: {
      type: String,
      default: 'Bell'
   },
   // 显示的数字
   num: {
      type: [String, Number],
      default: ''
   },
   // 最大值
   maxNum: {
      type: Number,
      default: ''
   },
})


</script>

<style lang="scss" scoped>
svg {
   width: 1.4em;
   height: 1.4em;
}
</style>
