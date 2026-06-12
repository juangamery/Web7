import { defineComponent, h } from 'vue';

export const Proportions = defineComponent({
  name: 'Proportions',
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
        h('path', {"d": "M4 4h16v2H4zM2 6h2v12H2zm2 12h16v2H4zM20 6h2v12h-2zM4 10h12v2H4zm12 2h2v6h-2zm-5 0h2v6h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
