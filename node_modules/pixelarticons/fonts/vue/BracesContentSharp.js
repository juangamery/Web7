import { defineComponent, h } from 'vue';

export const BracesContentSharp = defineComponent({
  name: 'BracesContentSharp',
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
        h('path', {"d": "M3 4h6v2H3zm18 0h-6v2h6zM3 20h6v-2H3zm18 0h-6v-2h6zM3 6h2v5H3zm18 0h-2v5h2zM3 18h2v-5H3zm18 0h-2v-5h2zM1 11h2v2H1zm10 0h2v2h-2zm-4 0h2v2H7zm8 0h2v2h-2zm8 0h-2v2h2z", "fillRule": "evenodd"})
      ]
    );
  }
});
