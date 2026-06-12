import { defineComponent, h } from 'vue';

export const ForwardSharp = defineComponent({
  name: 'ForwardSharp',
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
        h('path', {"d": "M2 7h2v12H2zm0 12h6v2H2zm4-4h4v2H6zM4 7h6v2H4zm6 8h2v6h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M6 15h2v6H6zm4-12h2v6h-2zm2 16h2v2h-2zm2-2h2v2h-2zm2-2h2v2h-2zm2-2h2v2h-2zm2-2h2v2h-2zm-2-2h2v2h-2zm-2-2h2v2h-2zm-2-2h2v2h-2zm-2-2h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
