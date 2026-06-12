import { defineComponent, h } from 'vue';

export const AlignHorizontalDistributeEndSharp = defineComponent({
  name: 'AlignHorizontalDistributeEndSharp',
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
        h('path', {"d": "M9 4H6v2h3zm2-2H9v20h2zM9 18H6v2h3zM6 4H4v16h2zm9 3h3v2h-3zm-2 0h2v10h-2zm2 8h3v2h-3zm3-13h2v20h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
