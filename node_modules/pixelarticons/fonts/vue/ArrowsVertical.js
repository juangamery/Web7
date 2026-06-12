import { defineComponent, h } from 'vue';

export const ArrowsVertical = defineComponent({
  name: 'ArrowsVertical',
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
        h('path', {"d": "M13 11h-2V1h2zm2-6h-2V3h2zm2 2h-2V5h2zm-6-2H9V3h2z", "fillRule": "evenodd"}),
        h('path', {"d": "M15 7H7V5h8zm-2 6h-2v10h2zm2 6h-2v2h2zm2-2h-2v2h2zm-6 2H9v2h2z", "fillRule": "evenodd"}),
        h('path', {"d": "M15 17H7v2h8z", "fillRule": "evenodd"})
      ]
    );
  }
});
