import { defineComponent, h } from 'vue';

export const Wallet = defineComponent({
  name: 'Wallet',
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
        h('path', {"d": "M18 5h2v2h-2zM4 3h14v2H4zM2 5h2v14H2zm2 14h16v2H4zm12-4h6v2h-6zm0-4h6v2h-6zm-2 0h2v6h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M20 7h2v12h-2zM4 7h16v2H4z", "fillRule": "evenodd"})
      ]
    );
  }
});
