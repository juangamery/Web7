import { defineComponent, h } from 'vue';

export const CloudServer = defineComponent({
  name: 'CloudServer',
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
        h('path', {"d": "M20 6h-2v2h2V6Zm2 2h-2v4h2V8Zm-2 4H4v2h16v-2ZM4 8H2v4h2V8Zm4-2H4v2h4V6Zm8-4h-6v2h6V2Zm-6 2H8v2h2V4Zm0 4H8v2h2V8Zm8-4h-2v2h2V4Zm0 4h-2v2h2V8Zm-7 8h2v2h-2zm0 4h2v2h-2zm-7-2h7v2H4zm9 0h7v2h-7zm-2-4h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
