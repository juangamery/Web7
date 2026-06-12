import { defineComponent, h } from 'vue';

export const ColorsSwatchSharp = defineComponent({
  name: 'ColorsSwatchSharp',
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
        h('path', {"d": "M12 2h10v2H12zm2 18h8v2h-8zM4 20h10v2H4zm8-16h2v16h-2zm8 0h2v16h-2zM2 14h2v8H2zm2 0h8v2H4zm12 2h2v2h-2zM6 12h2v2H6zm-2-2h2v2H4zm2-2h2v2H6zm2-2h2v2H8zm2 2h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
