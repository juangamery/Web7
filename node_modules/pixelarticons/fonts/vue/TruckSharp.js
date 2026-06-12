import { defineComponent, h } from 'vue';

export const TruckSharp = defineComponent({
  name: 'TruckSharp',
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
        h('path', {"d": "M0 4h14v2H0zm0 12h4v2H0zm10 0h4v2h-4zm12-4h2v6h-2zm-8-8h2v14h-2zM0 6h2v10H0zm20 4h2v2h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M14 8h6v2h-6zM4 14h6v2H4zm10 0h6v2h-6zM4 16h2v2H4zm10 0h2v2h-2zM4 18h6v2H4zm10 0h6v2h-6zm-6-2h2v2H8zm10 0h4v2h-4z", "fillRule": "evenodd"})
      ]
    );
  }
});
