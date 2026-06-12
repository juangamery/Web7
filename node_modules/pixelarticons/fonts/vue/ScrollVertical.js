import { defineComponent, h } from 'vue';

export const ScrollVertical = defineComponent({
  name: 'ScrollVertical',
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
        h('path', {"d": "M21 8h-2V4h2zM5 8H3V4h2zm16 6h-2v-4h2zM5 14H3v-4h2zm16 6h-2v-4h2zM5 20H3v-4h2zm10-2H9v2h6z", "fillRule": "evenodd"}),
        h('path', {"d": "M13 2h-2v20h2z", "fillRule": "evenodd"}),
        h('path', {"d": "M17 16H7v2h10zM15 6H9V4h6zm2 2H7V6h10z", "fillRule": "evenodd"})
      ]
    );
  }
});
