import { defineComponent, h } from 'vue';

export const AlignHorizontalJustifyEndSharp = defineComponent({
  name: 'AlignHorizontalJustifyEndSharp',
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
        h('path', {"d": "M20 2v20h2V2zM7 4H4v2h3zm2 0H7v16h2zM7 18H4v2h3zM4 4H2v16h2zm9 3h3v2h-3zm-2 0h2v10h-2zm2 8h3v2h-3zm3-8h2v10h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
