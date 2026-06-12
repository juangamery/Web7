import { defineComponent, h } from 'vue';

export const ClapperboardSharp = defineComponent({
  name: 'ClapperboardSharp',
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
        h('path', {"d": "M2 3h20v2H2zm2 6h16v2H4zM2 5h2v14H2zm18 0h2v14h-2zM2 19h20v2H2zM18 7h-2v2h2zm-8 0H8v2h2zm6-2h-2v2h2zM8 5H6v2h2z", "fillRule": "evenodd"})
      ]
    );
  }
});
