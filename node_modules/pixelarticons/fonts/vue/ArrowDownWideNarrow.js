import { defineComponent, h } from 'vue';

export const ArrowDownWideNarrow = defineComponent({
  name: 'ArrowDownWideNarrow',
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
        h('path', {"d": "M6 3h2v18H6z", "fillRule": "evenodd"}),
        h('path', {"d": "M4 17h6v2H4zm-2-2h10v2H2zm8-2h6v-2h-6zm0-4h9V7h-9zm0-4h12V3H10z", "fillRule": "evenodd"})
      ]
    );
  }
});
