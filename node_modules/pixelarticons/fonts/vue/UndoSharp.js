import { defineComponent, h } from 'vue';

export const UndoSharp = defineComponent({
  name: 'UndoSharp',
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
        h('path', {"d": "M10 14H8v-2H6v-2H4V8h2V6h2V4h2v4h10v12h-8v-2h6v-8h-8v4Z", "fillRule": "evenodd"})
      ]
    );
  }
});
