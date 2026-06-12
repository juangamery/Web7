import { defineComponent, h } from 'vue';

export const WindowFrame = defineComponent({
  name: 'WindowFrame',
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
        h('path', {"d": "M4 2h16v2H4zm0 6h16v2H4zm0 12h16v2H4zM2 4h2v16H2zm18 0h2v16h-2zM5 5h2v2H5zm3 0h2v2H8z", "fillRule": "evenodd"})
      ]
    );
  }
});
