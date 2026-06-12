import { defineComponent, h } from 'vue';

export const AlignVerticalDistributeEndSharp = defineComponent({
  name: 'AlignVerticalDistributeEndSharp',
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
        h('path', {"d": "M4 18v-3h2v3zm-2 2v-2h20v2zm16-2v-3h2v3zM4 15v-2h16v2zm3-9v3h2V6zm0-2v2h10V4zm8 2v3h2V6zM2 9v2h20V9z", "fillRule": "evenodd"})
      ]
    );
  }
});
