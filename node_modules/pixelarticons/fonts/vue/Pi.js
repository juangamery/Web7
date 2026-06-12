import { defineComponent, h } from 'vue';

export const Pi = defineComponent({
  name: 'Pi',
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
        h('path', {"d": "M8 6h2v15H8zm6 0h2v13h-2zm2 13h4v2h-4zM6 4h14v2H6zM4 6h2v4H4z", "fillRule": "evenodd"})
      ]
    );
  }
});
