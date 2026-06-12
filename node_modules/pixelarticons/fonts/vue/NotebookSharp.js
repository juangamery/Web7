import { defineComponent, h } from 'vue';

export const NotebookSharp = defineComponent({
  name: 'NotebookSharp',
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
        h('path', {"d": "M4 2h18v2H4zm0 18h18v2H4zM20 4h2v16h-2zM4 4h2v16H4z", "fillRule": "evenodd"}),
        h('path', {"d": "M2 7h6v2H2zm0 4h6v2H2zm0 4h6v2H2zM16 4h2v16h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
