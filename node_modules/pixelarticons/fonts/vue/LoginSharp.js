import { defineComponent, h } from 'vue';

export const LoginSharp = defineComponent({
  name: 'LoginSharp',
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
        h('path', {"d": "M2 11h14v2H2zm10-2h2v2h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M10 7h2v10h-2zm2 6h2v2h-2zM4 2h16v2H4zm0 18h16v2H4zM4 4h2v5H4zm0 11h2v5H4zM18 4h2v16h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
