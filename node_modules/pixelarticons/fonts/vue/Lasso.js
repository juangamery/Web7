import { defineComponent, h } from 'vue';

export const Lasso = defineComponent({
  name: 'Lasso',
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
        h('path', {"d": "M4 12h2v2H4zm-2 2h2v2H2zm2 2h2v4H4zm2-2h4v2H6zm0 6h2v2H6zm4-4h4v2h-4zm0-14h4v2h-4zm4 12h4v2h-4zm4-2h2v2h-2zm0-6h2v2h-2zM6 4h4v2H6zM4 6h2v2H4zm10-2h4v2h-4zm6 4h2v4h-2zM2 8h2v4H2z", "fillRule": "evenodd"})
      ]
    );
  }
});
