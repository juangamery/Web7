import { defineComponent, h } from 'vue';

export const AvatarCirclePlusSharp = defineComponent({
  name: 'AvatarCirclePlusSharp',
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
        h('path', {"d": "M6 2h12v2H6zm0 18h8v2H6zM2 6h2v12H2zm18 0h2v8h-2zM6 18h2v2H6zM18 4h2v2h-2zM4 4h2v2H4zm0 14h2v2H4zm14 0h2v2h-2zM6 16h8v2H6zm2-4h8v2H8zm0-4h2v4H8zm0-2h8v2H8zm6 2h2v4h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M18 16h2v6h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M16 18h6v2h-6z", "fillRule": "evenodd"})
      ]
    );
  }
});
