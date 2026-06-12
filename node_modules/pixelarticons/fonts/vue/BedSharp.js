import { defineComponent, h } from 'vue';

export const BedSharp = defineComponent({
  name: 'BedSharp',
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
        h('path', {"d": "M2 4h2v16H2zm18 6h2v10h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M2 16h20v2H2zm2-8h18v2H4zm2 2h2v6H6z", "fillRule": "evenodd"})
      ]
    );
  }
});
