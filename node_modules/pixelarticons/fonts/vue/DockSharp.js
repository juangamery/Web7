import { defineComponent, h } from 'vue';

export const DockSharp = defineComponent({
  name: 'DockSharp',
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
        h('path', {"d": "M2 4h20v2H2zm0 14h20v2H2zM2 6h2v12H2zm18 0h2v12h-2zM4 8h16v2H4zm2 6h12v2H6z", "fillRule": "evenodd"})
      ]
    );
  }
});
