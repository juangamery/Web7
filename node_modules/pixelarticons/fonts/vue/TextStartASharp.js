import { defineComponent, h } from 'vue';

export const TextStartASharp = defineComponent({
  name: 'TextStartASharp',
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
        h('path', {"d": "M12 6h10v2H12zm0 4h10v2H12zM2 14h20v2H2zm0 4h20v2H2zM2 6h2v6H2zm6 0h2v6H8zM2 4h8v2H2zm2 4h4v2H4z", "fillRule": "evenodd"})
      ]
    );
  }
});
