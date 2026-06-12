import { defineComponent, h } from 'vue';

export const SquarePower = defineComponent({
  name: 'SquarePower',
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
        h('path', {"d": "M4 20h16v2H4zM4 2h16v2H4zM2 4h2v16H2zm18 0h2v16h-2zM9 15h6v2H9zM7 9h2v6H7zm8 0h2v6h-2zm-4-2h2v5h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
