import { defineComponent, h } from 'vue';

export const CornerRightUpSharp = defineComponent({
  name: 'CornerRightUpSharp',
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
        h('path', {"d": "M16 20V4h-2v16zm-2 0v-2H4v2z", "fillRule": "evenodd"}),
        h('path', {"d": "M10 8v2h8V8zm2-2v2h2V6zm4 0v2h2V6zm2 2v2h2V8z", "fillRule": "evenodd"})
      ]
    );
  }
});
