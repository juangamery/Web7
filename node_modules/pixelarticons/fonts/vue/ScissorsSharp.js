import { defineComponent, h } from 'vue';

export const ScissorsSharp = defineComponent({
  name: 'ScissorsSharp',
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
        h('path', {"d": "M5 2h6v2H5zm0 12h4v2H5zm0-6h4v2H5zm0 12h6v2H5zM3 2h2v8H3zm0 12h2v8H3zM9 4h2v4H9zm0 12h2v4H9zm0-8h2v2H9zm2 2h2v2h-2zm-2 4h2v2H9zm2-2h2v2h-2zm2-2h2v2h-2zm2 4h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zM15 8h2v2h-2zm2-2h2v2h-2zm2-2h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
