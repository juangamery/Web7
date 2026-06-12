import { defineComponent, h } from 'vue';

export const ComputerSharp = defineComponent({
  name: 'ComputerSharp',
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
        h('path', {"d": "M4 1h16v2H4zm0 8h16v2H4zm0-6h2v6H4zm14 0h2v6h-2zM2 13h20v2H2zm0 8h20v2H2zm0-6h2v6H2zm18 0h2v6h-2zM6 17h2v2H6zm4 0h8v2h-8zm-2-6h2v2H8zm6 0h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
