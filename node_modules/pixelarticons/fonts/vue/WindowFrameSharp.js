import { defineComponent, h } from 'vue';

export const WindowFrameSharp = defineComponent({
  name: 'WindowFrameSharp',
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
        h('path', {"d": "M2 2h20v2H2zm2 6h16v2H4zM2 20h20v2H2zM2 4h2v16H2zm18 0h2v16h-2zM5 5h2v2H5zm3 0h2v2H8z", "fillRule": "evenodd"})
      ]
    );
  }
});
