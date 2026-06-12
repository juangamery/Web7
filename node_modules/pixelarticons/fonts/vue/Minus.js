import { defineComponent, h } from 'vue';

export const Minus = defineComponent({
  name: 'Minus',
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
        h('path', {"d": "M4 11h16v2H4z", "fillRule": "evenodd"})
      ]
    );
  }
});
