import { defineComponent, h } from 'vue';

export const ChevronsHorizontal2 = defineComponent({
  name: 'ChevronsHorizontal2',
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
        h('path', {"d": "M8 15H6v-2H4v-2h2V9h2V7h2v10H8v-2Zm8-6h2v2h2v2h-2v2h-2v2h-2V7h2v2Z", "fillRule": "evenodd"})
      ]
    );
  }
});
