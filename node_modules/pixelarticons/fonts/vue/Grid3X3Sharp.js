import { defineComponent, h } from 'vue';

export const Grid3X3Sharp = defineComponent({
  name: 'Grid3X3Sharp',
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
        h('path', {"d": "M2 2h20v2H2zm0 18h20v2H2zM2 4h2v16H2zm18 0h2v16h-2zM4 8h16v2H4zm0 6h16v2H4z", "fillRule": "evenodd"}),
        h('path', {"d": "M8 4h2v16H8zm6 0h2v16h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
