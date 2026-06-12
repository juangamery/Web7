import { defineComponent, h } from 'vue';

export const ArrowDownNarrowWide = defineComponent({
  name: 'ArrowDownNarrowWide',
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
        h('path', {"d": "M4 17h6v2H4zm-2-2h10v2H2zm8-12h6v2h-6zm0 4h9v2h-9zm0 4h12v2H10z", "fillRule": "evenodd"})
      ]
    );
  }
});
