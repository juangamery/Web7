import { defineComponent, h } from 'vue';

export const Grid2X3Sharp = defineComponent({
  name: 'Grid2X3Sharp',
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
        h('path', {"d": "M2 2h20v2H2zm0 18h20v2H2zM2 4h2v16H2zm18 0h2v16h-2zm-7 0v16h-2V4z", "fillRule": "evenodd"}),
        h('path', {"d": "M20 8v2H4V8zm0 6v2H4v-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
