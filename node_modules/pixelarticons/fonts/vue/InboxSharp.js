import { defineComponent, h } from 'vue';

export const InboxSharp = defineComponent({
  name: 'InboxSharp',
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
        h('path', {"d": "M2 4h2v16H2zm0 16h20v2H2zM20 4h2v16h-2zM2 2h20v2H2zm2 12h4v2H4zm2 2h12v2H6zm10-2h4v2h-4z", "fillRule": "evenodd"})
      ]
    );
  }
});
