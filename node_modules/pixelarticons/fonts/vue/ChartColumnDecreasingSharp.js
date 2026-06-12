import { defineComponent, h } from 'vue';

export const ChartColumnDecreasingSharp = defineComponent({
  name: 'ChartColumnDecreasingSharp',
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
        h('path', {"d": "M4 20h18v2H4zM2 2h2v20H2zm5 4h2v12H7zm5 4h2v8h-2zm5 4h2v4h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
