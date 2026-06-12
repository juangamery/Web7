import { defineComponent, h } from 'vue';

export const ArrowDownBox = defineComponent({
  name: 'ArrowDownBox',
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
        h('path', {"d": "M4 2h16v2H4zm0 18h16v2H4zM2 4h2v16H2zm18 0h2v16h-2zm-9 12h2v2h-2zm0-10h2v6h-2zm-2 8h6v2H9zm-2-2h10v2H7z", "fillRule": "evenodd"})
      ]
    );
  }
});
