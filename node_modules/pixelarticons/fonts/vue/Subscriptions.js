import { defineComponent, h } from 'vue';

export const Subscriptions = defineComponent({
  name: 'Subscriptions',
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
        h('path', {"d": "M4 10h16v2H4zm0 10h16v2H4zm-2-8h2v8H2zm18 0h2v8h-2zM6 6h12v2H6zm2-4h8v2H8zM6 16h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
