import { defineComponent, h } from 'vue';

export const CirclePower = defineComponent({
  name: 'CirclePower',
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
        h('path', {"d": "M6 20h12v2H6zM6 2h12v2H6zm12 2h2v2h-2zM4 4h2v2H4zm0 14h2v2H4zm14 0h2v2h-2zM2 6h2v12H2zm18 0h2v12h-2zM9 15h6v2H9zM7 9h2v6H7zm8 0h2v6h-2zm-4-2h2v5h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
