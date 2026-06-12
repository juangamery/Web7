import { defineComponent, h } from 'vue';

export const Ship = defineComponent({
  name: 'Ship',
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
        h('path', {"d": "M14 8h2v2h-2zm4 8h2v2h-2zM8 4h2v4H8z", "fillRule": "evenodd"}),
        h('path', {"d": "M6 6h8v2H6zm-4 4h20v2H2zm18 2h2v4h-2zM2 12h2v6H2zm4-4h2v2H6z", "fillRule": "evenodd"}),
        h('path', {"d": "M0 16h4v2H0zm4 2h4v2H4zm4-2h4v2H8zm4 2h4v2h-4zm4-2h4v2h-4zm4 2h4v2h-4z", "fillRule": "evenodd"})
      ]
    );
  }
});
