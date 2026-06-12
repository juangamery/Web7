import { defineComponent, h } from 'vue';

export const BracketsContentSharp = defineComponent({
  name: 'BracketsContentSharp',
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
        h('path', {"d": "M3 4h6v2H3zm18 0h-6v2h6zM3 20h6v-2H3zm18 0h-6v-2h6zM3 6h2v12H3zm18 0h-2v12h2zm-10 5h2v2h-2zm-4 0h2v2H7zm8 0h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
