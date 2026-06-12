import { defineComponent, h } from 'vue';

export const ClipboardSharp = defineComponent({
  name: 'ClipboardSharp',
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
        h('path', {"d": "M4 6h2v14H4zm0 14h16v2H4zM18 6h2v14h-2zM4 4h4v2H4zm12 0h4v2h-4zm-6-2h4v2h-4zm0 4h4v2h-4zM8 2h2v6H8zm6 0h2v6h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
