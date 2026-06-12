import { defineComponent, h } from 'vue';

export const TextAlignCenter = defineComponent({
  name: 'TextAlignCenter',
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
        h('path', {"d": "M2 5h20v2H2zm4 6h12v2H6zm-2 6h16v2H4z", "fillRule": "evenodd"})
      ]
    );
  }
});
