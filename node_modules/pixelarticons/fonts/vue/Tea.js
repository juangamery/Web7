import { defineComponent, h } from 'vue';

export const Tea = defineComponent({
  name: 'Tea',
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
        h('path', {"d": "M4 6h16v2H4zm0 2h2v10H4zm2 10h10v2H6zM20 8h2v4h-2zm-2 4h2v2h-2zm-2-4h2v10h-2zM7 2h2v2H7zm6 0h2v2h-2zM9 0h2v2H9zm6 0h2v2h-2zm-5 8h2v4h-2zm-2 4h6v4H8z", "fillRule": "evenodd"})
      ]
    );
  }
});
