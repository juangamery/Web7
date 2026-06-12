import { defineComponent, h } from 'vue';

export const ArrowsHorizontal = defineComponent({
  name: 'ArrowsHorizontal',
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
        h('path', {"d": "M13 13v-2h10v2zm6 2v-2h2v2zm-2 2v-2h2v2zm2-6V9h2v2z", "fillRule": "evenodd"}),
        h('path', {"d": "M17 15V7h2v8zm-6-2v-2H1v2zm-6 2v-2H3v2zm2 2v-2H5v2zm-2-6V9H3v2z", "fillRule": "evenodd"}),
        h('path', {"d": "M7 15V7H5v8z", "fillRule": "evenodd"})
      ]
    );
  }
});
