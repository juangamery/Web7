import { defineComponent, h } from 'vue';

export const Laugh = defineComponent({
  name: 'Laugh',
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
        h('path', {"d": "M6 20h12v2H6zM6 2h12v2H6zm12 2h2v2h-2zM4 4h2v2H4zm0 14h2v2H4zm14 0h2v2h-2zM2 6h2v12H2zm18 0h2v12h-2zM7 14h2v2H7zm0-2h10v2H7zm2 4h6v2H9zm6-2h2v2h-2zM8 8h2v2H8zm6 0h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
