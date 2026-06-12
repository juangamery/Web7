import { defineComponent, h } from 'vue';

export const Redo = defineComponent({
  name: 'Redo',
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
        h('path', {"d": "M20 8H6v2h14zM4 10h2v8H4zm2 8h6v2H6z", "fillRule": "evenodd"}),
        h('path', {"d": "M18 6h-2v6h2zm-2-2h-2v8h2zm0 8h-2v2h2z", "fillRule": "evenodd"})
      ]
    );
  }
});
