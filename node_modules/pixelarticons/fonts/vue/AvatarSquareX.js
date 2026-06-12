import { defineComponent, h } from 'vue';

export const AvatarSquareX = defineComponent({
  name: 'AvatarSquareX',
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
        h('path', {"d": "M4 2h16v2H4zm0 18h10v2H4zM2 4h2v16H2zm18 0h2v10h-2zM6 18h2v2H6zm2-2h6v2H8zm2-4h4v2h-4zM8 8h2v4H8zm2-2h4v2h-4zm4 2h2v4h-2zm4 10h2v2h-2zm-2-2h2v2h-2zm4 0h2v2h-2zm0 4h2v2h-2zm-4 0h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
