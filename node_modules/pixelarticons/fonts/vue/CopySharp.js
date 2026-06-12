import { defineComponent, h } from 'vue';

export const CopySharp = defineComponent({
  name: 'CopySharp',
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
        h('path', {"d": "M6 6h16v2H6zM2 2h16v2H2zm4 6h2v12H6zM2 4h2v12H2zm4 16h16v2H6zM20 8h2v12h-2zm-4-4h2v2h-2zM2 16h4v2H2z", "fillRule": "evenodd"})
      ]
    );
  }
});
