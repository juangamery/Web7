import { defineComponent, h } from 'vue';

export const SquareChevronLeft = defineComponent({
  name: 'SquareChevronLeft',
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
        h('path', {"d": "M4 20h16v2H4zM4 2h16v2H4zM2 4h2v16H2zm18 0h2v16h-2zM9 11v2h2v-2zm2-2v2h2V9zm2-2v2h2V7zm-2 6v2h2v-2zm2 2v2h2v-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
