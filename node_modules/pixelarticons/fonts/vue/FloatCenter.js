import { defineComponent, h } from 'vue';

export const FloatCenter = defineComponent({
  name: 'FloatCenter',
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
        h('path', {"d": "M18 6h4v2h-4zm0 4h4v2h-4zM2 6h4v2H2zm0 4h4v2H2zm0 4h20v2H2zm0 4h20v2H2zm8-14h4v2h-4zm0 6h4v2h-4zM8 6h2v4H8zm6 0h2v4h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
