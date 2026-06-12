import { defineComponent, h } from 'vue';

export const AlignCenterHorizontalSharp = defineComponent({
  name: 'AlignCenterHorizontalSharp',
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
        h('path', {"d": "M3 2h8v2H3zm10 3h8v2h-8zm0 14h8v-2h-8zM3 15h2v5H3zM3 4h2v5H3zm10 3h2v2h-2zm0 10h2v-2h-2zM3 20h8v2H3zm6-5h2v5H9zM9 4h2v5H9zm10 3h2v2h-2zm0 10h2v-2h-2zM2 11h20v2H2z", "fillRule": "evenodd"})
      ]
    );
  }
});
