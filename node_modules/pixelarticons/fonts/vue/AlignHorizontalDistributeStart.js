import { defineComponent, h } from 'vue';

export const AlignHorizontalDistributeStart = defineComponent({
  name: 'AlignHorizontalDistributeStart',
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
        h('path', {"d": "M6 4h3v2H6zM4 2h2v20H4zm2 16h3v2H6zM9 6h2v12H9zm9 1h-3v2h3zm2 2h-2v6h2zm-2 6h-3v2h3zM15 2h-2v20h2z", "fillRule": "evenodd"})
      ]
    );
  }
});
