import { defineComponent, h } from 'vue';

export const Receipt = defineComponent({
  name: 'Receipt',
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
        h('path', {"d": "M3 2h2v18H3zm16 0h2v18h-2zM5 4h2v2H5zm4 0h2v2H9zM5 20h14v2H5zm8-16h2v2h-2zM7 2h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm2 2h2v2h-2zM7 8h10v2H7zm0 4h10v2H7zm0 4h4v2H7z", "fillRule": "evenodd"})
      ]
    );
  }
});
