import { defineComponent, h } from 'vue';

export const Heading2 = defineComponent({
  name: 'Heading2',
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
        h('path', {"d": "M3 6h2v12H3z", "fillRule": "evenodd"}),
        h('path', {"d": "M3 11h10v2H3z", "fillRule": "evenodd"}),
        h('path', {"d": "M11 6h2v12h-2zm4 10h6v2h-6zm0-2h2v2h-2zm2-2h2v2h-2zm2-2h2v2h-2zm-2-2h2v2h-2zm-2 0h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
