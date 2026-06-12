import { defineComponent, h } from 'vue';

export const AspectRatioSharp = defineComponent({
  name: 'AspectRatioSharp',
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
        h('path', {"d": "M2 4h20v2H2zm0 2h2v12H2zm0 12h20v2H2zM20 6h2v12h-2zM6 8h4v2H6zm8 6h4v2h-4zm-8-4h2v2H6zm10 2h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
