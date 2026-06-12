import { defineComponent, h } from 'vue';

export const Goal = defineComponent({
  name: 'Goal',
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
        h('path', {"d": "M6 2h2v2H6zm0 18h12v2H6zm12-2h2v2h-2zM4 18h2v2H4zM4 4h2v2H4zm16 10h2v4h-2zM2 6h2v12H2zm6 10h8v2H8zM6 8h2v8H6zm10 6h2v2h-2zM10 2h2v12h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M10 2h6v2h-6zm0 6h6v2h-6zm6-4h6v2h-6zm0 6h6v2h-6zm4-4h2v4h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
