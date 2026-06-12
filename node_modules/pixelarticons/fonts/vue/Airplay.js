import { defineComponent, h } from 'vue';

export const Airplay = defineComponent({
  name: 'Airplay',
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
        h('path', {"d": "M4 3h16v2H4zM2 5h2v12H2zm18 0h2v12h-2zM4 17h2v2H4zm14 0h2v2h-2zm-7-2h2v2h-2zm-2 2h4v2H9zm4 0h2v2h-2zm2 2h2v2h-2zm-8 0h8v2H7z", "fillRule": "evenodd"})
      ]
    );
  }
});
