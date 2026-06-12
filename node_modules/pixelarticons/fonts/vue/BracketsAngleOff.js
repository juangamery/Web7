import { defineComponent, h } from 'vue';

export const BracketsAngleOff = defineComponent({
  name: 'BracketsAngleOff',
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
        h('path', {"d": "M2 1h2v2H2zm2 2h2v2H4zm2 2h2v2H6zm2 2h2v2H8zm2 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zM4 9h2v2H4zm2-2h2v2H6zm-4 4h2v2H2zm2 2h2v2H4zm2 2h2v2H6zm2 2h2v2H8zm6 0h2v2h-2zm6-6h2v2h-2zm-2-2h2v2h-2zm-2-2h2v2h-2zm-2-2h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
