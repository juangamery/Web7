import { defineComponent, h } from 'vue';

export const BriefcaseSharp = defineComponent({
  name: 'BriefcaseSharp',
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
        h('path', {"d": "M2 8h2v12H2zm18 0h2v12h-2zM2 6h20v2H2zm0 14h20v2H2zM8 4h2v2H8zm0-2h8v2H8zm6 2h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
