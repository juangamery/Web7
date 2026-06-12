import { defineComponent, h } from 'vue';

export const CommentTextSharp = defineComponent({
  name: 'CommentTextSharp',
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
        h('path', {"d": "M2 2h20v2H2zm0 14h16v2H2zm4-6h6v2H6zm0-4h12v2H6zM2 4h2v12H2zm18 0h2v18h-2zm-2 14h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
