import { defineComponent, h } from 'vue';

export const AvatarSquarePlusSharp = defineComponent({
  name: 'AvatarSquarePlusSharp',
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
        h('path', {"d": "M2 2h20v2H2zm0 18h12v2H2zM2 4h2v16H2zm18 0h2v10h-2zM6 18h2v2H6zm0-2h8v2H6zm2-4h8v2H8zm0-4h2v4H8zm0-2h8v2H8zm6 2h2v4h-2zm4 8h2v6h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M16 18h6v2h-6z", "fillRule": "evenodd"})
      ]
    );
  }
});
