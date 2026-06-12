import { defineComponent, h } from 'vue';

export const CornerLeftDownSharp = defineComponent({
  name: 'CornerLeftDownSharp',
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
        h('path', {"d": "M8 4v16h2V4zm2 0v2h10V4zm4 12v-2h-2v2zm-2 2v-2h-2v2zm-4 0v-2H6v2z", "fillRule": "evenodd"}),
        h('path', {"d": "M14 16v-2H4v2z", "fillRule": "evenodd"})
      ]
    );
  }
});
