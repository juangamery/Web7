import { defineComponent, h } from 'vue';

export const MailRightSharp = defineComponent({
  name: 'MailRightSharp',
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
        h('path', {"d": "M6 8h2v2H6zm2 2h2v2H8zm10-2h-2v2h2zm-2 2h-2v2h2zm-6 2h4v2h-4z", "fillRule": "evenodd"}),
        h('path', {"d": "M2 4h20v2H2zm0 14h10v2H2zM2 6h2v12H2zm18 0h2v6h-2zM6 8h2v2H6zm2 2h2v2H8zm6 0h2v2h-2zm2-2h2v2h-2zm-6 4h4v2h-4zm12 6h2v2h-2zm-8 0h4v2h-4zm6-2h2v6h-2zm-2-2h2v10h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
