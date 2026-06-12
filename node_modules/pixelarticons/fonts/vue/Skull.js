import { defineComponent, h } from 'vue';

export const Skull = defineComponent({
  name: 'Skull',
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
        h('path', {"d": "M7 20h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm-6-4h2v4H9zm4 0h2v4h-2zm-8-2h2v6H5zm12 0h2v6h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M3 14h4v2H3zM1 4h2v10H1zm20 0h2v10h-2zM3 2h18v2H3zm14 12h4v2h-4zM8 7h2v4H8zm6 0h2v4h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
