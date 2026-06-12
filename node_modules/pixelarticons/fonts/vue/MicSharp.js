import { defineComponent, h } from 'vue';

export const MicSharp = defineComponent({
  name: 'MicSharp',
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
        h('path', {"d": "M8 2h8v2H8zm0 2h2v10H8zm0 10h8v2H8zm6-10h2v10h-2zM4 10h2v8H4zm2 8h12v2H6zm12-8h2v8h-2zm-7 10h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
