import { defineComponent, h } from 'vue';

export const InvoiceSharp = defineComponent({
  name: 'InvoiceSharp',
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
        h('path', {"d": "M21 22h-4v-2h2V4H5v16h2v2H3V2h18v20Zm-10 0H9v-2h2v2Zm4 0h-2v-2h2v2Zm-6-2H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Z", "fillRule": "evenodd"})
      ]
    );
  }
});
