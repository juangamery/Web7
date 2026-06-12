import { defineComponent, h } from 'vue';

export const DoorClosed = defineComponent({
  name: 'DoorClosed',
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
        h('path', {"d": "M3 19h18v2H3zM5 5h2v14H5zm2-2h10v2H7zm10 2h2v14h-2zm-8 6h2v2H9z", "fillRule": "evenodd"})
      ]
    );
  }
});
