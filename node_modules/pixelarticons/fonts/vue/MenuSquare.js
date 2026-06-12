import { defineComponent, h } from 'vue';

export const MenuSquare = defineComponent({
  name: 'MenuSquare',
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
        h('path', {"d": "M4 2h16v2H4zm0 18h16v2H4zM2 4h2v16H2zm18 0h2v16h-2zM7 7h10v2H7zm0 4h10v2H7zm0 4h10v2H7z", "fillRule": "evenodd"})
      ]
    );
  }
});
