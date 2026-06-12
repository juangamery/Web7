import { defineComponent, h } from 'vue';

export const ProportionsSharp = defineComponent({
  name: 'ProportionsSharp',
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
        h('path', {"d": "M2 4h20v2H2zm0 2h2v12H2zm0 12h20v2H2zM20 6h2v12h-2zM4 10h14v2H4zm12 2h2v6h-2zm-5 0h2v6h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
