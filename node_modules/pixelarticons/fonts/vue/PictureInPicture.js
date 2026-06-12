import { defineComponent, h } from 'vue';

export const PictureInPicture = defineComponent({
  name: 'PictureInPicture',
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
        h('path', {"d": "M4 4h16v2H4zM2 6h2v12H2zm2 12h16v2H4zM20 6h2v12h-2zm-8 2h6v2h-6zm4 2h2v4h-2zm-6 2h6v2h-6zm0-4h2v4h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
