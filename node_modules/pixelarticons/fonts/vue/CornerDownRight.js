import { defineComponent, h } from 'vue';

export const CornerDownRight = defineComponent({
  name: 'CornerDownRight',
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
        h('path', {"d": "M6 16h14v-2H6zm-2-2h2V4H4z", "fillRule": "evenodd"}),
        h('path', {"d": "M16 10h-2v8h2zm2 2h-2v2h2zm0 4h-2v2h2zm-2 2h-2v2h2z", "fillRule": "evenodd"})
      ]
    );
  }
});
