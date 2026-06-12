import { defineComponent, h } from 'vue';

export const AlignVerticalDistributeStartSharp = defineComponent({
  name: 'AlignVerticalDistributeStartSharp',
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
        h('path', {"d": "M4 6v3h2V6zM2 4v2h20V4zm16 2v3h2V6zM4 9v2h16V9zm3 9v-3h2v3zm0 2v-2h10v2zm8-2v-3h2v3zM2 15v-2h20v2z", "fillRule": "evenodd"})
      ]
    );
  }
});
