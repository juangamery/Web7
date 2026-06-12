import { defineComponent, h } from 'vue';

export const Ratio = defineComponent({
  name: 'Ratio',
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
        h('path', {"d": "M4 6h16v2H4z", "fillRule": "evenodd"}),
        h('path', {"d": "M6 20V4h2v16zM2 8h2v8H2zm6 14v-2h8v2z", "fillRule": "evenodd"}),
        h('path', {"d": "M4 16h16v2H4z", "fillRule": "evenodd"}),
        h('path', {"d": "M16 20V4h2v16zm4-12h2v8h-2zM8 4V2h8v2z", "fillRule": "evenodd"})
      ]
    );
  }
});
