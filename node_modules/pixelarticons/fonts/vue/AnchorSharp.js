import { defineComponent, h } from 'vue';

export const AnchorSharp = defineComponent({
  name: 'AnchorSharp',
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
        h('path', {"d": "M8 2h8v2H8zm0 6h8v2H8zm0-4h2v4H8zm6 0h2v4h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M11 9h2v12h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M5 20h14v2H5zm-2-8h2v10H3zm16 0h2v10h-2zM5 12h2v2H5zm12 0h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
