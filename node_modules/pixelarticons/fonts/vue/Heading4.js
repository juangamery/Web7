import { defineComponent, h } from 'vue';

export const Heading4 = defineComponent({
  name: 'Heading4',
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
        h('path', {"d": "M3 6h2v12H3z", "fillRule": "evenodd"}),
        h('path', {"d": "M3 11h10v2H3z", "fillRule": "evenodd"}),
        h('path', {"d": "M11 6h2v12h-2zm4 6h4v2h-4zm4-4h2v10h-2zm-4 0h2v4h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
