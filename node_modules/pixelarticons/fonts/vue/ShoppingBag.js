import { defineComponent, h } from 'vue';

export const ShoppingBag = defineComponent({
  name: 'ShoppingBag',
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
        h('path', {"d": "M3 6h18v2H3zm2 14h14v2H5zM3 8h2v12H3zm16 0h2v12h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M7 4h2v6H7zm2-2h6v2H9zm6 2h2v6h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
