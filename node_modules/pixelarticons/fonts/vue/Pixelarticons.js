import { defineComponent, h } from 'vue';

export const Pixelarticons = defineComponent({
  name: 'Pixelarticons',
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
        h('path', {"d": "M7 13h2v2H7zm0-6h6v2H7zM4 2h16v2H4zm0 18h16v2H4zm-2 0V4h2v16zm18 0V4h2v16zM7 11h6v2H7zm4-2h2v2h-2zM7 9h2v2H7zm6 4h2v2h-2zm2-2h2v2h-2zm0 4h2v2h-2zm-4 0h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
