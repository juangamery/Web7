import { defineComponent, h } from 'vue';

export const BatteryMediumSharp = defineComponent({
  name: 'BatteryMediumSharp',
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
        h('path', {"d": "M4 5h14v2H4zm0 12h14v2H4zM2 5h2v14H2zm16 0h2v14h-2zm2 4h2v6h-2zM6 9h2v6H6zm4 0h2v6h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
