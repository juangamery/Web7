import { defineComponent, h } from 'vue';

export const SquareChevronRightSharp = defineComponent({
  name: 'SquareChevronRightSharp',
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
        h('path', {"d": "M2 20h20v2H2zM2 2h20v2H2zm0 2h2v16H2zm18 0h2v16h-2zm-5 7v2h-2v-2zm-2-2v2h-2V9zm-2-2v2H9V7zm2 6v2h-2v-2zm-2 2v2H9v-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
