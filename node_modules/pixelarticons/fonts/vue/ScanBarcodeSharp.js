import { defineComponent, h } from 'vue';

export const ScanBarcodeSharp = defineComponent({
  name: 'ScanBarcodeSharp',
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
        h('path', {"d": "M16 2h6v2h-6zm4 2h2v4h-2zm0 12h2v4h-2zm-4 4h6v2h-6zM2 20h6v2H2zm0-4h2v4H2zM2 4h2v4H2zm0-2h6v2H2zm5 6h2v8H7zm4 0h2v8h-2zm5 0h2v8h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
