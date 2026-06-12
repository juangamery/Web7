import { defineComponent, h } from 'vue';

export const PotionSharp = defineComponent({
  name: 'PotionSharp',
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
        h('path', {"d": "M8 6h8v2H8zm0-4h8v2H8zm0 6h2v2H8zm6 0h2v2h-2zM4 20h16v2H4zm0-8h2v8H4zm14 0h2v8h-2zM6 10h2v2H6zm10 0h2v2h-2zM6 2h2v6H6zm10 0h2v6h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
