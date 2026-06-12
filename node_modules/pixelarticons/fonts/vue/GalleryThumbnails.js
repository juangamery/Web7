import { defineComponent, h } from 'vue';

export const GalleryThumbnails = defineComponent({
  name: 'GalleryThumbnails',
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
        h('path', {"d": "M4 2h16v2H4zM2 4h2v12H2zm2 12h16v2H4zM20 4h2v12h-2zM3 20h3v2H3zm5 0h3v2H8zm5 0h3v2h-3zm5 0h3v2h-3z", "fillRule": "evenodd"})
      ]
    );
  }
});
