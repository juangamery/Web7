import { defineComponent, h } from 'vue';

export const PictureInPictureSharp = defineComponent({
  name: 'PictureInPictureSharp',
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
        h('path', {"d": "M2 4h20v2H2zm0 2h2v12H2zm0 12h20v2H2zM20 6h2v12h-2zm-8 2h6v2h-6zm4 2h2v4h-2zm-6 2h6v2h-6zm0-4h2v4h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
