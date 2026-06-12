import { defineComponent, h } from 'vue';

export const CoffeeSharp = defineComponent({
  name: 'CoffeeSharp',
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
        h('path', {"d": "M4 4h16v2H4zm0 2h2v8H4zm0 8h14v2H4zM20 4h2v8h-2zm-2 6h2v2h-2zm-2-4h2v8h-2zM2 18h18v2H2z", "fillRule": "evenodd"})
      ]
    );
  }
});
