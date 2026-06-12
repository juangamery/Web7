import { defineComponent, h } from 'vue';

export const ArrowUpBoxSharp = defineComponent({
  name: 'ArrowUpBoxSharp',
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
        h('path', {"d": "M2 2h20v2H2zm0 18h20v2H2zM2 4h2v16H2zm18 0h2v16h-2zm-8.933 4.009h2v-2h-2zm0 10h2v-6h-2zm-2-8h6v-2h-6zm-2 2h10v-2h-10z", "fillRule": "evenodd"})
      ]
    );
  }
});
