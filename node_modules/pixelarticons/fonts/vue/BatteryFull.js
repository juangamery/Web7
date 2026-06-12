import { defineComponent, h } from 'vue';

export const BatteryFull = defineComponent({
  name: 'BatteryFull',
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
        h('path', {"d": "M4 5h14v2H4zm0 12h14v2H4zM2 7h2v10H2zm16-2h2v14h-2zm2 4h2v6h-2zM6 9h2v6H6zm4 0h2v6h-2zm4 0h2v6h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
