import { defineComponent, h } from 'vue';

export const ChevronUp2 = defineComponent({
  name: 'ChevronUp2',
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
        h('path', {"d": "M17 15v-2h-2v-2h-2V9h-2v2H9v2H7v2h10Z", "fillRule": "evenodd"})
      ]
    );
  }
});
