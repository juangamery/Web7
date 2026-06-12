import { defineComponent, h } from 'vue';

export const ArrowBarUp = defineComponent({
  name: 'ArrowBarUp',
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
        h('path', {"d": "M4 4h16V2H4zm7 18h2V6h-2zm2-12h2V8h-2zm2 2h2v-2h-2zm2 2h2v-2h-2zm-8-4h2V8H9zm-2 2h2v-2H7zm-2 2h2v-2H5z", "fillRule": "evenodd"})
      ]
    );
  }
});
