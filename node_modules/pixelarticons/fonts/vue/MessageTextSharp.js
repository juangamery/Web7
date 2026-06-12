import { defineComponent, h } from 'vue';

export const MessageTextSharp = defineComponent({
  name: 'MessageTextSharp',
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
        h('path', {"d": "M22 2H2v2h20zm0 14H6v2h16zm0-12h-2v12h2zM4 4H2v18h2zm2 14H4v2h2zm0-6h4v2H6zm0-4h8v2H6z", "fillRule": "evenodd"})
      ]
    );
  }
});
