import { defineComponent, h } from 'vue';

export const ChartBarBigSharp = defineComponent({
  name: 'ChartBarBigSharp',
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
        h('path', {"d": "M4 20h18v2H4zM2 2h2v20H2zm16 11v3h-2v-3zM8 13v3H6v-3zm10-2v2H6v-2zm0 5v2H6v-2zm2-12v3h-2V4zM8 4v3H6V4zm12-2v2H6V2zm0 5v2H6V7z", "fillRule": "evenodd"})
      ]
    );
  }
});
