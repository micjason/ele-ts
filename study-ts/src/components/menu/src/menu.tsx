import { defineComponent, PropType } from 'vue'
import { MenuItem } from './types'
import { toLine } from '@/utils/index'
import * as Icons from '@element-plus/icons-vue'
export default defineComponent({
  props: {
    data: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
    defaultActive: {
      type: String,
      default: '',
    },
    router: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    let renderMenu = (data: MenuItem[]) => {
      return data.map((item: MenuItem) => {
        // 这里i是要用来做标签名的 但是不能这么写
        // item.i = `el-icon-${toLine(item.icon)}`
        item.i = (Icons as any)[item.icon!]
        let slots = {
          title: () => {
            return (
              <>
                <item.i />
                <span>{item.name}</span>
              </>
            )
          },
        }
        if (item.children && item.children.length > 0) {
          return (
            <el-sub-menu index={item.index} v-slots={slots}>
              {renderMenu(item.children)}
            </el-sub-menu>
          )
        }
        return (
          <el-menu-item index={item.index}>
            <item.i />
            <span>{item.name}</span>
          </el-menu-item>
        )
      })
    }
    return () => {
      return (
        <el-menu default-active={props.defaultActive} router={props.router}>
          {renderMenu(props.data)}
        </el-menu>
      )
    }
  },
})
