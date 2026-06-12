import { defineComponent, h } from 'vue';

export const MailboxSharp = defineComponent({
  name: 'MailboxSharp',
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
        h('path', {"d": "M1 18h22v2H1zM1 8h2v10H1zm4-4h14v2H5zM3 6h2v2H3zm4 0h2v2H7zm12 0h2v2h-2zM9 8h2v10H9zm12 0h2v10h-2zM5 10h2v2H5zm9 0h4v2h-4zm2 2h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
