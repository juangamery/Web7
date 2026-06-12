import { defineComponent, h } from 'vue';

export const PcCase = defineComponent({
  name: 'PcCase',
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
        h('path', {"d": "M4 2h16v2H4zm0 18h16v2H4zM6 4h2v16H6zM2 4h2v16H2zm18 0h2v16h-2zM10 6h8v2h-8zm0 4h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
