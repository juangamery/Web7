import { defineComponent, h } from 'vue';

export const TabSharp = defineComponent({
  name: 'TabSharp',
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
        h('path', {"d": "M2 6h2v12H2zm0 12h20v2H2zM20 6h2v12h-2zM2 4h20v2H2zm10 2h8v4h-8z", "fillRule": "evenodd"})
      ]
    );
  }
});
