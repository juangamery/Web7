import { defineComponent, h } from 'vue';

export const ToolCase = defineComponent({
  name: 'ToolCase',
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
        h('path', {"d": "M2 11h20v2H2zm0 2h2v8H2zm2 8h16v2H4zm16-8h2v8h-2zM9 15h6v2H9zM4 8h2v3H4zm2-2h6v2H6zm6 2h2v3h-2zM8 4h2v2H8zm10 0h2v7h-2zm-8-2h8v2h-8z", "fillRule": "evenodd"})
      ]
    );
  }
});
