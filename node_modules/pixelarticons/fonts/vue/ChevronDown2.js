import { defineComponent, h } from 'vue';

export const ChevronDown2 = defineComponent({
  name: 'ChevronDown2',
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
        h('path', {"d": "M17 9v2h-2v2h-2v2h-2v-2H9v-2H7V9h10Z", "fillRule": "evenodd"})
      ]
    );
  }
});
