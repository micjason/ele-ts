<template>
   <div class="list">
      <el-tabs stretch>
         <el-tab-pane v-for="(item, index) in list" :key="index" :label="item.title">
            <el-scrollbar max-height="300px">
               <div class="container" v-for="(item1, index1) in item.content" :key="index1"
                  @click="clickItem(item1, index1)">
                  <div class="avatar" v-if="item1.avatar">
                     <component :is="`el-icon${toLine(item1.avatar)}`"></component>
                  </div>

                  <div class="content">
                     <div class="title">{{ item1.title }}</div>
                     <div class="desc">{{ item1.desc }}</div>
                     <div class="time">{{ item1.time }}</div>
                  </div>
               </div>
               <div v-for="(action, i) in actions" :key="i" class="a-item" :class="{ border: i !== actions.length }"
                  @click="clickAction(action, i)">
                  <div class="a-icon" v-if="action.icon">
                     <component :is="`el-icon${toLine(action.icon)}`"></component>
                  </div>
               </div>
            </el-scrollbar>
         </el-tab-pane>
      </el-tabs>
   </div>
</template>

<script setup lang="ts">
import { toLine } from '@/utils/index'
import type { PropType } from 'vue'
import { ListItem, ListOptions, ActionOptions } from './types'
let props = defineProps({
   // 列表的内容
   list: {
      type: Array as PropType<ListOptions[]>,
      required: true,
   },
   actions: {
      type: Array as PropType<ActionOptions[]>,
      default: () => [],
   },
})
let emits = defineEmits(['clickItem', 'clickAction'])
const clickItem = (item: ListItem, index: number) => {
   emits('clickItem', { item, index })
}
const clickAction = (item: ActionOptions, index: number) => {
   emits('clickAction', { item, index })
}
</script>

<style lang="scss" scoped></style>
