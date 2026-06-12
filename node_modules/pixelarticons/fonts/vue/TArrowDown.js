import { defineComponent, h } from 'vue';

export const TArrowDown = defineComponent({
  name: 'TArrowDown',
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
        h('path', {"d": "M16 6h2v12h-2zm2 8h2v2h-2zm-4 0h2v2h-2zm4-2h4v2h-4zm-6 0h4v2h-4zM6 8h2v10H6zM2 6h8v2H2z", "fillRule": "evenodd"}),
        h('path', {"d": "M2 6h2v3H2zm8 0h2v3h-2zM4 16h6v2H4z", "fillRule": "evenodd"})
      ]
    );
  }
});
