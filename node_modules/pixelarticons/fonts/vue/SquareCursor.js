import { defineComponent, h } from 'vue';

export const SquareCursor = defineComponent({
  name: 'SquareCursor',
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
        h('path', {"d": "M12 10h2v12h-2zm2 0h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm-6 4h2v2h-2zm2-2h6v2h-6zM4 2h16v2H4zm0 18h6v2H4zM2 4h2v16H2zm18 0h2v8h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
