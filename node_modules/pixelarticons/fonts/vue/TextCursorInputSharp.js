import { defineComponent, h } from 'vue';

export const TextCursorInputSharp = defineComponent({
  name: 'TextCursorInputSharp',
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
        h('path', {"d": "M5 3h4v2H5zm4 2h2v14H9zm2-2h4v2h-4zM4 7h3v2H4zM2 7h2v10H2zm2 8h3v2H4zm9 0h7v2h-7zm7-8h2v10h-2zm-7 0h7v2h-7zM6 19h3v2H6zm5 0h3v2h-3z", "fillRule": "evenodd"})
      ]
    );
  }
});
