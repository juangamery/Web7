import { defineComponent, h } from 'vue';

export const TextAlignJustify = defineComponent({
  name: 'TextAlignJustify',
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
        h('path', {"d": "M2 5h20v2H2zm0 6h20v2H2zm0 6h20v2H2z", "fillRule": "evenodd"})
      ]
    );
  }
});
