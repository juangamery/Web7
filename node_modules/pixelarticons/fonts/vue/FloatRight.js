import { defineComponent, h } from 'vue';

export const FloatRight = defineComponent({
  name: 'FloatRight',
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
        h('path', {"d": "M2 6h10v2H2zm0 4h10v2H2zm0 4h20v2H2zm0 4h20v2H2zM16 4h4v2h-4zm0 6h4v2h-4zm-2-4h2v4h-2zm6 0h2v4h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
