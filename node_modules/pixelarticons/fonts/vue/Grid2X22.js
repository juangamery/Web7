import { defineComponent, h } from 'vue';

export const Grid2X22 = defineComponent({
  name: 'Grid2X22',
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
        h('path', {"d": "M4 2h16v2H4zM2 4h2v16H2zm2 7h16v2H4zm16-7h2v16h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M11 4h2v18h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M4 20h16v2H4z", "fillRule": "evenodd"})
      ]
    );
  }
});
