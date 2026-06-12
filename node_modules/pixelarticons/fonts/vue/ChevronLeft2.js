import { defineComponent, h } from 'vue';

export const ChevronLeft2 = defineComponent({
  name: 'ChevronLeft2',
  props: {
    class: {
      type: String,
      default: ''
    }
  },
  setup(props, { attrs }) {
    return () => h(
      'svg',
      {
        viewBox: '0 0 20 20',
        width: '24px', height: '24px',
        class: `pixelart-icons-font ${props.class}`,
        ...attrs
      },
      [
        h('path', {"d": "M15 17h-2v-2h-2v-2H9v-2h2V9h2V7h2v10Z", "fillRule": "evenodd"})
      ]
    );
  }
});
