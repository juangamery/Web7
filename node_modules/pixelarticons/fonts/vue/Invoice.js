import { defineComponent, h } from 'vue';

export const Invoice = defineComponent({
  name: 'Invoice',
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
        h('path', {"d": "M5 20h2v2H3V4h2v16Zm6 2H9v-2h2v2Zm4 0h-2v-2h2v2Zm6 0h-4v-2h2V4h2v18ZM9 20H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm2-16H5V2h14v2Z", "fillRule": "evenodd"})
      ]
    );
  }
});
