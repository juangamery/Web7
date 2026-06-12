import { defineComponent, h } from 'vue';

export const FlipHorizontal2 = defineComponent({
  name: 'FlipHorizontal2',
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
        h('path', {"d": "M11 7h2v4h-2zm0-6h2v4h-2zm0 12h2v4h-2zm0 6h2v4h-2zm-4-8h2v2H7zm10 0h-2v2h2zM5 13h2v2H5zm14 0h-2v2h2zM5 9h2v4H5zm14 0h-2v4h2zM3 7h2v10H3zm18 0h-2v10h2z", "fillRule": "evenodd"})
      ]
    );
  }
});
