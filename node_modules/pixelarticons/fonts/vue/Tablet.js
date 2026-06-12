import { defineComponent, h } from 'vue';

export const Tablet = defineComponent({
  name: 'Tablet',
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
        h('path', {"d": "M5 2h14v2H5zm0 18h14v2H5zM3 4h2v16H3zm16 0h2v16h-2zm-8 12h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
