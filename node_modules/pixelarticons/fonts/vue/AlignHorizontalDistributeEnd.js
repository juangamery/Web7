import { defineComponent, h } from 'vue';

export const AlignHorizontalDistributeEnd = defineComponent({
  name: 'AlignHorizontalDistributeEnd',
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
        h('path', {"d": "M9 4H6v2h3zm2-2H9v20h2zM9 18H6v2h3zM6 6H4v12h2zm9 1h3v2h-3zm-2 2h2v6h-2zm2 6h3v2h-3zm3-13h2v20h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
