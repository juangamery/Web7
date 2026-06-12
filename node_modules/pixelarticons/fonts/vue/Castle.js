import { defineComponent, h } from 'vue';

export const Castle = defineComponent({
  name: 'Castle',
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
        h('path', {"d": "M1 8h2v12H1zm2 12h18v2H3zM21 8h2v12h-2zM3 10h18v2H3zm2-8h2v8H5zm12 0h2v8h-2zM7 4h10v2H7zm2-2h2v2H9zm4 0h2v2h-2zM8 16h2v4H8zm2-2h4v2h-4zm4 2h2v4h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
