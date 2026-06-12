import { defineComponent, h } from 'vue';

export const CellularSignal0Sharp = defineComponent({
  name: 'CellularSignal0Sharp',
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
        h('path', {"d": "M4 14h2v2H4zm7-4h2v2h-2zm7-6h2v2h-2zM2 14h2v4H2zm7-4h2v8H9zm7-6h2v14h-2zM6 14h2v4H6zm7-4h2v8h-2zm7-6h2v14h-2zM2 18h6v2H2zm7 0h6v2H9zm7 0h6v2h-6z", "fillRule": "evenodd"})
      ]
    );
  }
});
