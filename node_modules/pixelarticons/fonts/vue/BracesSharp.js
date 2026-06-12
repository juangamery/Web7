import { defineComponent, h } from 'vue';

export const BracesSharp = defineComponent({
  name: 'BracesSharp',
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
        h('path', {"d": "M4 4h6v2H4zm16 0h-6v2h6zM4 20h6v-2H4zm16 0h-6v-2h6zM4 6h2v5H4zm16 0h-2v5h2zM4 18h2v-5H4zm16 0h-2v-5h2zM2 11h2v2H2zm20 0h-2v2h2z", "fillRule": "evenodd"})
      ]
    );
  }
});
