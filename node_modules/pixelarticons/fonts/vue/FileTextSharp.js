import { defineComponent, h } from 'vue';

export const FileTextSharp = defineComponent({
  name: 'FileTextSharp',
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
        h('path', {"d": "M6 4H4v16h2zm10-2H4v2h12zm4 4h-2v14h2zm0 14H4v2h16zM16 4h2v2h-2zm-4 0h2v6h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M12 8h6v2h-6zm-4 8h8v2H8zm0-4h8v2H8zm0-4h2v2H8z", "fillRule": "evenodd"})
      ]
    );
  }
});
