import { defineComponent, h } from 'vue';

export const ArrowDownCircle = defineComponent({
  name: 'ArrowDownCircle',
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
        h('path', {"d": "M11 16h2v2h-2zm0-10h2v6h-2zm-2 8h6v2H9zm-2-2h10v2H7zm11 6h2v2h-2zm0-14h2v2h-2zM4 4h2v2H4zm0 14h2v2H4zM6 2h12v2H6zm0 18h12v2H6zM2 6h2v12H2zm18 0h2v12h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
