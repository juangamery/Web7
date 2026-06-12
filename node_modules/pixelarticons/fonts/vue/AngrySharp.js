import { defineComponent, h } from 'vue';

export const AngrySharp = defineComponent({
  name: 'AngrySharp',
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
        h('path', {"d": "M2 20h20v2H2zM2 2h20v2H2z", "fillRule": "evenodd"}),
        h('path', {"d": "M2 2h2v20H2zm18 0h2v20h-2zM7 7h2v2H7zm2 2h2v2H9zm6-2h2v2h-2zm-2 2h2v2h-2zm-6 6h2v2H7zm2-2h6v2H9zm6 2h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
