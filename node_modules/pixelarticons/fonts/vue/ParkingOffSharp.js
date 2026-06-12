import { defineComponent, h } from 'vue';

export const ParkingOffSharp = defineComponent({
  name: 'ParkingOffSharp',
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
        h('path', {"d": "M8 2h14v2H8zM4 20h14v2H4zM2 6h2v16H2zm18-2h2v12h-2zM8 8h2v10H8zm4-2h2v2h-2zm2 2h2v2h-2zm-4 4h4v2h-4zm10 8h2v2h-2zm-2-2h2v2h-2zm-2-2h2v2h-2zm-2-2h2v2h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M12 12h2v2h-2zm-2-2h2v2h-2zM8 8h2v2H8zM6 6h2v2H6zM4 4h2v2H4zM2 2h2v2H2z", "fillRule": "evenodd"})
      ]
    );
  }
});
