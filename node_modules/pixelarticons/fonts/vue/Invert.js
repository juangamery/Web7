import { defineComponent, h } from 'vue';

export const Invert = defineComponent({
  name: 'Invert',
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
        h('path', {"d": "M4 2h16v2H4zm0 18h16v2H4zM2 4h2v16H2zm18 0h2v16h-2zM4 18h2v2H4zm0-2h4v2H4zm0-2h6v2H4zm0-2h8v2H4zm0-2h10v2H4zm0-2h12v2H4zm0-2h14v2H4zm0-2h16v2H4z", "fillRule": "evenodd"})
      ]
    );
  }
});
