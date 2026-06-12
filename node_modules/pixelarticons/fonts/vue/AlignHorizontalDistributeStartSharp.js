import { defineComponent, h } from 'vue';

export const AlignHorizontalDistributeStartSharp = defineComponent({
  name: 'AlignHorizontalDistributeStartSharp',
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
        h('path', {"d": "M6 4h3v2H6zM4 2h2v20H4zm2 16h3v2H6zM9 4h2v16H9zm9 3h-3v2h3zm2 0h-2v10h2zm-2 8h-3v2h3zM15 2h-2v20h2z", "fillRule": "evenodd"})
      ]
    );
  }
});
