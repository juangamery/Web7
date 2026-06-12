import { defineComponent, h } from 'vue';

export const ClipboardNoteSharp = defineComponent({
  name: 'ClipboardNoteSharp',
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
        h('path', {"d": "M20 12h2v8h-2zm-10-2h12v2H10zm0 10h10v2H10zm0-8h2v8h-2zM6 2h8v2H6zm0 4h8v2H6zm0-2h2v2H6zm6 0h2v2h-2zm2 0h4v2h-4z", "fillRule": "evenodd"}),
        h('path', {"d": "M16 6h2v5h-2zM2 4h4v2H2zm0 2h2v12H2zm0 12h8v2H2zm4-8h2v2H6zm0 4h2v2H6zm11 2h5v2h-5z", "fillRule": "evenodd"}),
        h('path', {"d": "M16 16h2v6h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
