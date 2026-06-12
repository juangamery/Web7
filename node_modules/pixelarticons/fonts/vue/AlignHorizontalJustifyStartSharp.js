import { defineComponent, h } from 'vue';

export const AlignHorizontalJustifyStartSharp = defineComponent({
  name: 'AlignHorizontalJustifyStartSharp',
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
        h('path', {"d": "M4 2v20H2V2zm4 2h3v2H8zM6 4h2v16H6zm2 14h3v2H8zm3-14h2v16h-2zm6 3h3v2h-3zm-2 0h2v10h-2zm2 8h3v2h-3zm3-8h2v10h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
