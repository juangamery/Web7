import { defineComponent, h } from 'vue';

export const Printer = defineComponent({
  name: 'Printer',
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
        h('path', {"d": "M6 4h2v4H6zm2-2h8v2H8zm8 2h2v4h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M4 6h16v2H4zM2 8h2v10H2zm2 10h2v2H4zm2-4h12v2H6z", "fillRule": "evenodd"}),
        h('path', {"d": "M6 14h2v8H6zm2 6h8v2H8zm8-6h2v8h-2zm2 4h2v2h-2zm2-10h2v10h-2zm-4 2h2v2h-2zm-4 0h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
