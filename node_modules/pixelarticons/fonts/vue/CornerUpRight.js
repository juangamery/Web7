import { defineComponent, h } from 'vue';

export const CornerUpRight = defineComponent({
  name: 'CornerUpRight',
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
        h('path', {"d": "M6 8h14v2H6zm-2 2h2v10H4zm12 4h-2v-2h2zm2-2h-2v-2h2zm0-4h-2V6h2z", "fillRule": "evenodd"}),
        h('path', {"d": "M16 12h-2V4h2z", "fillRule": "evenodd"})
      ]
    );
  }
});
