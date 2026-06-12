import { defineComponent, h } from 'vue';

export const Directions = defineComponent({
  name: 'Directions',
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
        h('path', {"d": "M2 2h2v2H2zm2 2h2v2H4zm2-2h2v2H6zM2 6h2v2H2zm4 0h2v2H6zm11 9h3v2h-3zm-2 2h2v3h-2zm2 3h3v2h-3zm3-3h2v3h-2zM15 2h2v10h-2zm-2 2h2v2h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M11 6h9v2h-9z", "fillRule": "evenodd"}),
        h('path', {"d": "M19 6h2v2h-2zm-2-2h2v2h-2zM6 12h9v2H6zm-2 2h2v4H4zm0 6h2v2H4z", "fillRule": "evenodd"})
      ]
    );
  }
});
