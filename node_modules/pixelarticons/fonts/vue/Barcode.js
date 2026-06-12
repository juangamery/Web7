import { defineComponent, h } from 'vue';

export const Barcode = defineComponent({
  name: 'Barcode',
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
        h('path', {"d": "M2 4h2v16H2zm4 0h3v16H6zm5 0h3v16h-3zm5 0h2v16h-2zm4 0h2v16h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
