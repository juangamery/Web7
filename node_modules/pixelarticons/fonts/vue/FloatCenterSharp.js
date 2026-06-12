import { defineComponent, h } from 'vue';

export const FloatCenterSharp = defineComponent({
  name: 'FloatCenterSharp',
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
        h('path', {"d": "M18 6h4v2h-4zm0 4h4v2h-4zM2 6h4v2H2zm0 4h4v2H2zm0 4h20v2H2zm0 4h20v2H2zM8 4h8v2H8zm0 6h8v2H8zm0-4h2v4H8zm6 0h2v4h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
