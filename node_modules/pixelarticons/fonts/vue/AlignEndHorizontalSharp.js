import { defineComponent, h } from 'vue';

export const AlignEndHorizontalSharp = defineComponent({
  name: 'AlignEndHorizontalSharp',
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
        h('path', {"d": "M3 2h8v2H3zm0 2h2v12H3zm0 12h8v2H3zM9 4h2v12H9zm4 5h8v2h-8zm0 2h2v5h-2zm0 5h8v2h-8zm6-5h2v5h-2zM2 20h20v2H2z", "fillRule": "evenodd"})
      ]
    );
  }
});
