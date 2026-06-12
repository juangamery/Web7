import { defineComponent, h } from 'vue';

export const Heading5 = defineComponent({
  name: 'Heading5',
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
        h('path', {"d": "M11 6h2v12h-2zm10 10h-6v2h6zm0-2h-2v2h2zm-2-2h-2v2h2zm-2-4h-2v6h2zm2 0h-2v2h2zm2 0h-2v2h2z", "fillRule": "evenodd"})
      ]
    );
  }
});
