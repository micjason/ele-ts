<template>
   <div class="trend">
      <div class="trend-item">
         <slot v-if="slots.default"></slot>
         <div class="trend-item-text" v-else>{{ text }}</div>
         <div class="trend-item-icon" :style="{ color: iconColor }">
            <el-icon-arrow-up v-if="type === 'up'"></el-icon-arrow-up>
            <el-icon-arrow-down v-else></el-icon-arrow-down>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
const props = defineProps({
   // 上升还是下降
   type: {
      type: String,
      default: "up",
   },
   text: {
      type: String,
      default: "文字",
   },
   icon: {
      type: String,
      default: "文字",
   },
   textColor: {
      type: String,
      default: "文字",
   },
   iconColor: {
      type: String,
      default: "red",
   },
});

import { useSlots, useAttrs } from 'vue'

const slots = useSlots()
const attrs = useAttrs()

console.log(slots.default, attrs)
</script>

<style lang="scss" scoped>
.trend {
   .trend-item {
      display: flex;
      align-items: center;

      .trend-item-text {
         font-size: 14px;
      }

      .trend-item-icon {
         margin-left: 4px;

         svg {
            width: 0.8em;
            height: 0.8em;
         }
      }
   }
}
</style>
