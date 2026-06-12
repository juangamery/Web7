import { defineComponent, h } from 'vue';

export const CornerRightDown = defineComponent({
  name: 'CornerRightDown',
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
        h('path', {"d": "M16 6v14h-2V6zm-2-2v2H4V4z", "fillRule": "evenodd"}),
        h('path', {"d": "M10 16v-2h10v2zm2 2v-2h2v2zm4 0v-2h2v2z", "fillRule": "evenodd"}),
        h('path', {"d": "M18 16v-2h2v2z", "fillRule": "evenodd"})
      ]
    );
  }
});
