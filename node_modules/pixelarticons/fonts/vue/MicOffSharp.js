import { defineComponent, h } from 'vue';

export const MicOffSharp = defineComponent({
  name: 'MicOffSharp',
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
        h('path', {"d": "M8 2h8v2H8zm0 6h2v8H8zm2 6h4v2h-4zm4-10h2v6h-2zM4 10h2v9H4zm2 8h12v2H6zm10-2h2v2h-2zm-2-2h2v2h-2zm-2-2h2v2h-2zm-2-2h2v2h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M8 8h2v2H8zM6 6h2v2H6zM4 4h2v2H4zM2 2h2v2H2zm16 16h2v2h-2zm2 2h2v2h-2zm-2-10h2v4h-2zm-7 10h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
