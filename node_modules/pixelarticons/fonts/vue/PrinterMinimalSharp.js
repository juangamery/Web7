import { defineComponent, h } from 'vue';

export const PrinterMinimalSharp = defineComponent({
  name: 'PrinterMinimalSharp',
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
        h('path', {"d": "M6 2h12v2H6zM4 8h16v2H4zm2-4h2v4H6zM2 8h2v8H2zm14-4h2v4h-2zM2 16h4v2H2zm4-2h2v6H6zm10 0h2v6h-2zM6 12h12v2H6zm0 8h12v2H6zm12-4h4v2h-4zm2-8h2v8h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
