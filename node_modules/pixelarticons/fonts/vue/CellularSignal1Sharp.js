import { defineComponent, h } from 'vue';

export const CellularSignal1Sharp = defineComponent({
  name: 'CellularSignal1Sharp',
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
        h('path', {"d": "M4 12h2v6H4zm7-2h2v2h-2zm7-6h2v2h-2zM2 12h2v6H2zm7-2h2v8H9zm7-6h2v14h-2zM6 12h2v6H6zm7-2h2v8h-2zm7-6h2v14h-2zM2 18h6v2H2zm7 0h6v2H9zm7 0h6v2h-6z", "fillRule": "evenodd"})
      ]
    );
  }
});
