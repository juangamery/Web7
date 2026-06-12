import { defineComponent, h } from 'vue';

export const AlignHorizontalJustifyEnd = defineComponent({
  name: 'AlignHorizontalJustifyEnd',
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
        h('path', {"d": "M20 2v20h2V2zM7 4H4v2h3zm2 2H7v12h2zM7 18H4v2h3zM4 6H2v12h2zm9 1h3v2h-3zm-2 2h2v6h-2zm2 6h3v2h-3zm3-6h2v6h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
