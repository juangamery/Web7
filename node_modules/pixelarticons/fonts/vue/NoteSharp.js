import { defineComponent, h } from 'vue';

export const NoteSharp = defineComponent({
  name: 'NoteSharp',
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
        h('path', {"d": "M2 4h2v16H2zm18 0h2v12h-2zM2 2h20v2H2zm16 14h2v2h-2zm-2 2h2v2h-2zM2 20h14v2H2zm10-8h8v2h-8zm0 2h2v6h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
