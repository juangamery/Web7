import { defineComponent, h } from 'vue';

export const Tree = defineComponent({
  name: 'Tree',
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
        h('path', {"d": "M6 4h2v2H6zm2-2h8v2H8zm10 4h2v4h-2zm2 4h2v6h-2zm-2 6h2v2h-2zM4 16h2v2H4zm-2-6h2v6H2zm4 8h12v2H6zM4 6h2v4H4z", "fillRule": "evenodd"}),
        h('path', {"d": "M11 18h2v4h-2zm5-14h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
