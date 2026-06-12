import { defineComponent, h } from 'vue';

export const BadgeCaptions = defineComponent({
  name: 'BadgeCaptions',
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
        h('path', {"d": "M3 4h18v2H3zm0 14h18v2H3zM1 6h2v12H1zm20 0h2v12h-2zm-6 8h4v2h-4zM5 10h4v2H5zm0 4h8v2H5zm6-4h8v2h-8z", "fillRule": "evenodd"})
      ]
    );
  }
});
