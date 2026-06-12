import { defineComponent, h } from 'vue';

export const ArrowUpZA = defineComponent({
  name: 'ArrowUpZA',
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
        h('path', {"d": "M14 9h7v2h-7zm0-6h7v2h-7zm2 4h2v2h-2zm2-2h2v2h-2zM6 21h2V3H6z", "fillRule": "evenodd"}),
        h('path', {"d": "M4 7h6V5H4zM2 9h10V7H2zm12 6h2v6h-2zm2-2h3v2h-3zm3 2h2v6h-2zm-3 2h3v2h-3z", "fillRule": "evenodd"})
      ]
    );
  }
});
