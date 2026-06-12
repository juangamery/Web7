import { defineComponent, h } from 'vue';

export const PlusBoxSharp = defineComponent({
  name: 'PlusBoxSharp',
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
        h('path', {"d": "M2 2h20v2H2zm0 18h20v2H2zM2 4h2v16H2zm18 0h2v16h-2zM7 11h10v2H7z", "fillRule": "evenodd"}),
        h('path', {"d": "M11 17V7h2v10z", "fillRule": "evenodd"})
      ]
    );
  }
});
