import { defineComponent, h } from 'vue';

export const AvatarSquareSharp = defineComponent({
  name: 'AvatarSquareSharp',
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
        h('path', {"d": "M2 2h20v2H2zm0 18h20v2H2zM2 4h2v16H2zm18 0h2v16h-2zM6 18h2v2H6zm10 0h2v2h-2zM6 16h12v2H6zm2-4h8v2H8zm0-4h2v4H8zm0-2h8v2H8zm6 2h2v4h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
