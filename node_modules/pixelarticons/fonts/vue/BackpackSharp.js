import { defineComponent, h } from 'vue';

export const BackpackSharp = defineComponent({
  name: 'BackpackSharp',
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
        h('path', {"d": "M3 6h18v2H3zm0 2h2v12H3zm0 12h18v2H3zM19 8h2v12h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M7 16h2v6H7zm8 0h2v6h-2zm-8-2h10v2H7zm0-4h10v2H7zm1-6h2v2H8zm6 0h2v2h-2zM8 2h8v2H8z", "fillRule": "evenodd"})
      ]
    );
  }
});
