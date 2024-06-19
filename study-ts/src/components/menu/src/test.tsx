import { computed, defineComponent, reactive, ref } from "vue";
import Test from './test.vue'
// const Test = defineComponent({
//   props: {
//     name: String,
//   },
//   setup: (props, { slots }) => {
//     return () => {
//       return (
//         <div class="lihao">
//           {slots.default()}
//           <div>{slots.tom()}</div>
//         </div>
//       );
//     };
//   },
// });

export default defineComponent({
  props: {},
  setup: (props, { emit }) => {
    return () => {
        let slot = {
            default: () => {
              return 888;
            },
            // tom: () => {
            //   return <h1>999</h1>;
            // },
          }
      return (
        <Test
          v-slots={slot}
        />
      );
    };
  },
});
