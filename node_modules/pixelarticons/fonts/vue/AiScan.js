import { defineComponent, h } from 'vue';

export const AiScan = defineComponent({
  name: 'AiScan',
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
        h('path', {"d": "M9 11h2v2H9zm4 0h2v2h-2zM7 7h10v2H7zM5 9h2v6H5zm2 6h10v2H7zm10-6h2v6h-2zm-6-4h2v2h-2zM4 2h4v2H4zm0 18h4v2H4zM16 2h4v2h-4zm0 18h4v2h-4zM2 4h2v4H2zm0 12h2v4H2zM20 4h2v4h-2zm0 12h2v4h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
