import { defineComponent, h } from 'vue';

export const ArrowUp = defineComponent({
  name: 'ArrowUp',
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
        h('path', {"d": "M11 20h2V4h-2zm2-12h2V6h-2zm2 2h2V8h-2zm2 2h2v-2h-2zm-6-4H9V6h2z", "fillRule": "evenodd"}),
        h('path', {"d": "M15 10H7V8h8zm2 2H5v-2h12z", "fillRule": "evenodd"})
      ]
    );
  }
});
