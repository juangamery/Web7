import { defineComponent, h } from 'vue';

export const ArrowBarDown = defineComponent({
  name: 'ArrowBarDown',
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
        h('path', {"d": "M4 20h16v2H4zm7-18h2v16h-2zm2 12h2v2h-2zm2-2h2v2h-2zm2-2h2v2h-2zm-8 4h2v2H9zm-2-2h2v2H7zm-2-2h2v2H5z", "fillRule": "evenodd"})
      ]
    );
  }
});
