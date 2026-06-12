import { defineComponent, h } from 'vue';

export const BracketsSharp = defineComponent({
  name: 'BracketsSharp',
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
        h('path', {"d": "M3 4h6v2H3zm18 0h-6v2h6zM3 20h6v-2H3zm18 0h-6v-2h6zM3 6h2v12H3zm18 0h-2v12h2z", "fillRule": "evenodd"})
      ]
    );
  }
});
