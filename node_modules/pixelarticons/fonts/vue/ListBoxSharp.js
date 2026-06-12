import { defineComponent, h } from 'vue';

export const ListBoxSharp = defineComponent({
  name: 'ListBoxSharp',
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
        h('path', {"d": "M2 2h20v2H2zm4 5h2v2H6zm4 0h8v2h-8zm-4 4h2v2H6zm4 0h8v2h-8zm-4 4h2v2H6zm4 0h8v2h-8zm-8 5h20v2H2zM2 4h2v16H2zm18 0h2v16h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
