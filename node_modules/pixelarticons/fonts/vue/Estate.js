import { defineComponent, h } from 'vue';

export const Estate = defineComponent({
  name: 'Estate',
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
        h('path', {"d": "M2 20h20v2H2zM2 4h2v16H2zm2-2h8v2H4zm8 2h2v16h-2zM6 6h4v2H6zm0 4h4v2H6zm1 6h2v4H7zm11-6h2v2h-2zm2 2h2v4h-2zm-4 0h2v4h-2zm2 4h2v4h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
