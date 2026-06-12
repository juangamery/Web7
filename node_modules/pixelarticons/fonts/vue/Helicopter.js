import { defineComponent, h } from 'vue';

export const Helicopter = defineComponent({
  name: 'Helicopter',
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
        h('path', {"d": "M2 8h2v8H2zm2 4h2v2H4zm2-4h2v8H6zm2-2h10v2H8zm10 2h2v2h-2zm2 2h2v6h-2zM8 16h12v2H8zm2 2h2v2h-2zm6 0h2v2h-2zM6 20h16v2H6zM4 2h18v2H4z", "fillRule": "evenodd"}),
        h('path', {"d": "M12 4h2v8h-2zm2 8h6v2h-6z", "fillRule": "evenodd"})
      ]
    );
  }
});
