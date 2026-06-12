import { defineComponent, h } from 'vue';

export const BrushSharp = defineComponent({
  name: 'BrushSharp',
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
        h('path', {"d": "M5 2h12v2H5zm0 2h2v10H5zm12-2h2v12h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M13 2h2v6h-2zM9 2h2v4H9zm-4 8h14v2H5zm0 4h14v2H5zm4 2h2v4H9zm4 0h2v4h-2zm-4 4h6v2H9z", "fillRule": "evenodd"})
      ]
    );
  }
});
