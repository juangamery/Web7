import { defineComponent, h } from 'vue';

export const FloatRightSharp = defineComponent({
  name: 'FloatRightSharp',
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
        h('path', {"d": "M2 6h10v2H2zm0 4h10v2H2zm0 4h20v2H2zm0 4h20v2H2zM14 4h8v2h-8zm0 6h8v2h-8zm0-4h2v4h-2zm6 0h2v4h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
