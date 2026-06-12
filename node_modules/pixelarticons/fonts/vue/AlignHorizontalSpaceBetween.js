import { defineComponent, h } from 'vue';

export const AlignHorizontalSpaceBetween = defineComponent({
  name: 'AlignHorizontalSpaceBetween',
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
        h('path', {"d": "M5 4h3v2H5zM3 2h2v20H3zm2 16h3v2H5zM8 6h2v12H8zm8 1h3v2h-3zm-2 2h2v6h-2zm2 6h3v2h-3zm3-13h2v20h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
