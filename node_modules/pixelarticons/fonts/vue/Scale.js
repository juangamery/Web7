import { defineComponent, h } from 'vue';

export const Scale = defineComponent({
  name: 'Scale',
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
        h('path', {"d": "M13 9h2v2h-2zm2-2h2v2h-2zm2-2h2v2h-2zm2-2h2v8h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M13 3h8v2h-8zm-2 12H9v-2h2zm-2 2H7v-2h2zm-2 2H5v-2h2zm-2 2H3v-8h2z", "fillRule": "evenodd"}),
        h('path', {"d": "M11 21H3v-2h8z", "fillRule": "evenodd"})
      ]
    );
  }
});
