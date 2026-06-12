import { defineComponent, h } from 'vue';

export const AlignEndHorizontal = defineComponent({
  name: 'AlignEndHorizontal',
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
        h('path', {"d": "M5 2h4v2H5zM3 4h2v12H3zm2 12h4v2H5zM9 4h2v12H9zm6 5h4v2h-4zm-2 2h2v5h-2zm2 5h4v2h-4zm4-5h2v5h-2zM2 20h20v2H2z", "fillRule": "evenodd"})
      ]
    );
  }
});
