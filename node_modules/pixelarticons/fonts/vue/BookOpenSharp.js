import { defineComponent, h } from 'vue';

export const BookOpenSharp = defineComponent({
  name: 'BookOpenSharp',
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
        h('path', {"d": "M0 3h13v2H0zm0 16h11v2H0z", "fillRule": "evenodd"}),
        h('path', {"d": "M11 3h13v2H11zm2 16h11v2H13zM11 5h2v18h-2zM0 5h2v14H0zm22 0h2v14h-2zm-7 2h5v2h-5zm0 4h5v2h-5zm0 4h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
