import { defineComponent, h } from 'vue';

export const TabletSharp = defineComponent({
  name: 'TabletSharp',
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
        h('path', {"d": "M3 2h18v2H3zm0 18h18v2H3zM3 4h2v16H3zm16 0h2v16h-2zm-8 12h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
