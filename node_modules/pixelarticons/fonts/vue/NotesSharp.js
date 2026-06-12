import { defineComponent, h } from 'vue';

export const NotesSharp = defineComponent({
  name: 'NotesSharp',
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
        h('path', {"d": "M6 8h2v12H6zM2 4h2v12H2zm18 4h2v8h-2zM6 6h16v2H6zM2 2h16v2H2zm16 14h2v2h-2zm-2 2h2v2h-2zM6 20h10v2H6zm8-6h6v2h-6z", "fillRule": "evenodd"}),
        h('path', {"d": "M14 14h2v6h-2zm2-10h2v2h-2zM2 16h4v2H2z", "fillRule": "evenodd"})
      ]
    );
  }
});
