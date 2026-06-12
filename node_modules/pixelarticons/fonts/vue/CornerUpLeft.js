import { defineComponent, h } from 'vue';

export const CornerUpLeft = defineComponent({
  name: 'CornerUpLeft',
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
        h('path', {"d": "M18 8H4v2h14zm2 2h-2v10h2zM8 14h2v-2H8zm-2-2h2v-2H6zm0-4h2V6H6z", "fillRule": "evenodd"}),
        h('path', {"d": "M8 12h2V4H8z", "fillRule": "evenodd"})
      ]
    );
  }
});
