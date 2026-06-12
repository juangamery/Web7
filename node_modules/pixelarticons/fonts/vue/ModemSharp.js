import { defineComponent, h } from 'vue';

export const ModemSharp = defineComponent({
  name: 'ModemSharp',
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
        h('path', {"d": "M2 12h20v2H2zm0 8h20v2H2zm0-6h2v6H2zm18 0h2v6h-2zm-4 2h2v2h-2zm-4 0h2v2h-2zm2-6h2v2h-2zm-3-2h2v2h-2zM9 4h2v2H9zm10 0h2v2h-2zm-2 4h2v2h-2zm-4-2h4v2h-4zm-2-4h8v2h-8z", "fillRule": "evenodd"})
      ]
    );
  }
});
