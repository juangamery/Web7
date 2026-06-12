import { defineComponent, h } from 'vue';

export const ArrowLeftBox = defineComponent({
  name: 'ArrowLeftBox',
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
        h('path', {"d": "M4 2h16v2H4zm0 18h16v2H4zM2 4h2v16H2zm18 0h2v16h-2zM8.067 11.009v2h-2v-2zm10 0v2h-6v-2zm-8-2v6h-2v-6zm2-2v10h-2v-10z", "fillRule": "evenodd"})
      ]
    );
  }
});
