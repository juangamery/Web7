import { defineComponent, h } from 'vue';

export const MoneySharp = defineComponent({
  name: 'MoneySharp',
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
        h('path', {"d": "M6 8h16v2H6zm0 10h16v2H6zm0-8h2v8H6zm14 0h2v8h-2zM2 4h16v2H2zm0 10h4v2H2zm0-8h2v8H2zm14 0h2v2h-2zm-4 6h4v4h-4z", "fillRule": "evenodd"})
      ]
    );
  }
});
