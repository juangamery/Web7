import { defineComponent, h } from 'vue';

export const TextColums = defineComponent({
  name: 'TextColums',
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
        h('path', {"d": "M11 19H3v-2h8v2Zm10 0h-8v-2h8v2Zm-10-4H3v-2h8v2Zm10 0h-8v-2h8v2Zm-10-4H3V9h8v2Zm10 0h-8V9h8v2ZM11 7H3V5h8v2Zm10 0h-8V5h8v2Z", "fillRule": "evenodd"})
      ]
    );
  }
});
