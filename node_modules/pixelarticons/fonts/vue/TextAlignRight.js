import { defineComponent, h } from 'vue';

export const TextAlignRight = defineComponent({
  name: 'TextAlignRight',
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
        h('path', {"d": "M2 5h20v2H2zm8 6h12v2H10zm-4 6h16v2H6z", "fillRule": "evenodd"})
      ]
    );
  }
});
