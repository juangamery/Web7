import { defineComponent, h } from 'vue';

export const SquareChevronUpSharp = defineComponent({
  name: 'SquareChevronUpSharp',
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
        h('path', {"d": "M2 20h20v2H2zM2 2h20v2H2zm0 2h2v16H2zm18 0h2v16h-2zm-9 5h2v2h-2zm-2 2h2v2H9zm-2 2h2v2H7zm6-2h2v2h-2zm2 2h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
