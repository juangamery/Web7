import { defineComponent, h } from 'vue';

export const ChessSharp = defineComponent({
  name: 'ChessSharp',
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
        h('path', {"d": "M2 2h20v2H2zm0 18h20v2H2zM2 4h2v16H2zm18 0h2v16h-2zM8 4h4v4H8zM4 8h4v4H4zm4 4h4v4H8zm-4 4h4v4H4zM16 4h4v4h-4zm-4 4h4v4h-4zm4 4h4v4h-4zm-4 4h4v4h-4z", "fillRule": "evenodd"})
      ]
    );
  }
});
