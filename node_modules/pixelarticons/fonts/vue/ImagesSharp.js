import { defineComponent, h } from 'vue';

export const ImagesSharp = defineComponent({
  name: 'ImagesSharp',
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
        h('path', {"d": "M5 2h18v2H5zm0 14h18v2H5zm-4 4h18v2H1zM5 4h2v12H5zM1 8h2v12H1zm20-4h2v12h-2zm-4 6h2v2h-2zm2 2h2v2h-2zm-4 0h2v2h-2zm-2 2h2v2h-2zm-2-8h2v2h-2zM9 8h2v2H9zm2 2h2v2h-2zm2-2h2v2h-2zM1 6h4v2H1zm16 12h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
