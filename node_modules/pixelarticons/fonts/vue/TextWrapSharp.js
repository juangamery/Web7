import { defineComponent, h } from 'vue';

export const TextWrapSharp = defineComponent({
  name: 'TextWrapSharp',
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
        h('path', {"d": "M3 5h16v2H3zm0 8h4v2H3zm0 4h6v2H3zm0-8h6v2H3zm16-4h2v10h-2zM9 13h10v2H9z", "fillRule": "evenodd"}),
        h('path', {"d": "M11 11h2v6h-2zm2-2h2v8h-2zm0 8h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
