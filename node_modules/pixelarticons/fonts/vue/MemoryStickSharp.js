import { defineComponent, h } from 'vue';

export const MemoryStickSharp = defineComponent({
  name: 'MemoryStickSharp',
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
        h('path', {"d": "M1 4h22v2H1zm0 2h2v3H1zm0 5h2v7H1zm20 0h2v7h-2zM3 9h2v2H3zm16 0h2v2h-2zm2-3h2v3h-2zM1 18h22v2H1zm2-4h18v2H3zm2 2h2v2H5zm4 0h2v2H9zm4 0h2v2h-2zm4 0h2v2h-2zM7 8h2v4H7zm4 0h2v4h-2zm4 0h2v4h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
