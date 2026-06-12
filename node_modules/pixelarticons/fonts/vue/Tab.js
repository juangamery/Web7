import { defineComponent, h } from 'vue';

export const Tab = defineComponent({
  name: 'Tab',
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
        h('path', {"d": "M2 6h2v12H2zm2 12h16v2H4zM20 6h2v12h-2zM4 4h16v2H4zm8 2h8v4h-8z", "fillRule": "evenodd"})
      ]
    );
  }
});
