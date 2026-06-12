import { defineComponent, h } from 'vue';

export const Blocks = defineComponent({
  name: 'Blocks',
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
        h('path', {"d": "M15 1h6v2h-6zm-2 2h2v6h-2zm2 6h6v2h-6zm6-6h2v6h-2zM3 5h6v2H3zM1 7h2v14H1zm2 14h14v2H3zm14-6h2v6h-2zM3 13h14v2H3z", "fillRule": "evenodd"}),
        h('path', {"d": "M9 7h2v14H9z", "fillRule": "evenodd"})
      ]
    );
  }
});
