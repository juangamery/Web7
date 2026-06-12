import { defineComponent, h } from 'vue';

export const Anchor = defineComponent({
  name: 'Anchor',
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
        h('path', {"d": "M10 2h4v2h-4zm0 6h4v2h-4zM8 4h2v4H8zm6 0h2v4h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M11 9h2v12h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M5 20h14v2H5zm-2-8h2v8H3zm16 0h2v8h-2zM5 12h2v2H5zm12 0h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
