import { defineComponent, h } from 'vue';

export const ParkingSharp = defineComponent({
  name: 'ParkingSharp',
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
        h('path', {"d": "M2 2h20v2H2zm0 18h20v2H2zM2 4h2v16H2zm18 0h2v16h-2zM8 6h2v12H8zm2 0h4v2h-4zm4 2h2v4h-2zm-4 4h4v2h-4z", "fillRule": "evenodd"})
      ]
    );
  }
});
