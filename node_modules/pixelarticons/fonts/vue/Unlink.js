import { defineComponent, h } from 'vue';

export const Unlink = defineComponent({
  name: 'Unlink',
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
        h('path', {"d": "M4 6h5v2H4zm11 0h5v2h-5zm0 10h5v2h-5zM4 16h5v2H4zm16-8h2v8h-2zM2 8h2v8H2zm9-4h2v16h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
