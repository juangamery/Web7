import { defineComponent, h } from 'vue';

export const LinkSharp = defineComponent({
  name: 'LinkSharp',
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
        h('path', {"d": "M2 6h9v2H2zm0 10h9v2H2zm0-8h2v8H2zm20-2h-9v2h9zm0 10h-9v2h9zm0-8h-2v8h2zM7 11h10v2H7z", "fillRule": "evenodd"})
      ]
    );
  }
});
