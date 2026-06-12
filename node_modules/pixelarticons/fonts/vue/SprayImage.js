import { defineComponent, h } from 'vue';

export const SprayImage = defineComponent({
  name: 'SprayImage',
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
        h('path', {"d": "M4 12h6v2H4zm2-2h2v2H6zm-4 4h2v6H2zm0 6h10v2H2zm8-6h2v6h-2zM4 2h16v2H4zM2 4h2v6H2zm18 0h2v16h-2zm-6 16h6v2h-6zm4-8h2v2h-2zm0 4h2v2h-2zm-6-6h2v2h-2zm2-2h2v2h-2zm0 8h2v2h-2zm2-6h2v2h-2zm0 4h2v2h-2zM8 6h2v2H8z", "fillRule": "evenodd"})
      ]
    );
  }
});
