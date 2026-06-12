import { defineComponent, h } from 'vue';

export const ChevronRight2 = defineComponent({
  name: 'ChevronRight2',
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
        h('path', {"d": "M9 17h2v-2h2v-2h2v-2h-2V9h-2V7H9v10Z", "fillRule": "evenodd"})
      ]
    );
  }
});
