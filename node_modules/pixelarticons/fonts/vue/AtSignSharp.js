import { defineComponent, h } from 'vue';

export const AtSignSharp = defineComponent({
  name: 'AtSignSharp',
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
        h('path', {"d": "M9 8h6v2H9zm0 6h8v2H9zm-2 2V8h2v8z", "fillRule": "evenodd"}),
        h('path', {"d": "M13 14V8h2v6zm4-10h2v12h-2zM3 4h14v2H3zm0 2h2v12H3zm0 12h16v2H3z", "fillRule": "evenodd"})
      ]
    );
  }
});
