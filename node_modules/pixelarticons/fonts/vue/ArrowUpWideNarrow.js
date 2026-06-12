import { defineComponent, h } from 'vue';

export const ArrowUpWideNarrow = defineComponent({
  name: 'ArrowUpWideNarrow',
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
        h('path', {"d": "M6 21h2V3H6z", "fillRule": "evenodd"}),
        h('path', {"d": "M4 7h6V5H4zM2 9h10V7H2zm8 12h6v-2h-6zm0-4h9v-2h-9zm0-4h12v-2H10z", "fillRule": "evenodd"})
      ]
    );
  }
});
