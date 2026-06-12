import { defineComponent, h } from 'vue';

export const CigaretteOff = defineComponent({
  name: 'CigaretteOff',
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
        h('path', {"d": "M2 13h2v2H2zm2-2h9v2H4zm0 4h13v2H4zm3-2h2v2H7zm10-2h3v2h-3zm3 2h2v2h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M11 11h2v2h-2zM9 9h2v2H9zM7 7h2v2H7zM5 5h2v2H5zM3 3h2v2H3zm10 10h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zM14 6h2v3h-2zm-2-3h2v3h-2zm7 3h2v3h-2zm-2-3h2v3h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
