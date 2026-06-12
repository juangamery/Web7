import { defineComponent, h } from 'vue';

export const Gamepad = defineComponent({
  name: 'Gamepad',
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
        h('path', {"d": "M4 4h16v2H4zm0 14h16v2H4zM2 6h2v12H2zm18 0h2v12h-2zM8 9h2v6H8z", "fillRule": "evenodd"}),
        h('path', {"d": "M6 11h6v2H6zm8-2h2v2h-2zm2 4h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
