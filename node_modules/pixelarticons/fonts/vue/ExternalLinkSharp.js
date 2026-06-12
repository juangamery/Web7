import { defineComponent, h } from 'vue';

export const ExternalLinkSharp = defineComponent({
  name: 'ExternalLinkSharp',
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
        h('path', {"d": "M11 5H3v2h8V5ZM5 7H3v12h2V7Zm14 12H3v2h16v-2Zm0-6h-2v6h2v-6Zm-8 0H9v2h2v-2Zm2-2h-2v2h2v-2Zm2-2h-2v2h2V9Zm2-2h-2v2h2V7Zm2-2h-2v2h2V5Zm2-2h-2v8h2V3Z", "fillRule": "evenodd"}),
        h('path', {"d": "M21 3h-8v2h8V3Z", "fillRule": "evenodd"})
      ]
    );
  }
});
