import { defineComponent, h } from 'vue';

export const Icons = defineComponent({
  name: 'Icons',
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
        h('path', {"d": "M3 1h6v2H3zM1 3h2v6H1zm2 6h6v2H3zm6-6h2v6H9zm4-2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm-2-6h2v2h-2zm2-2h2v2h-2zm-6 6h2v2h-2zm-2 2h2v2h-2zm0 4h10v2H13zm0 8h10v2H13zm0-6h2v6h-2zm8 0h2v6h-2zM5 13h2v2H5zm2 2h2v4H7zm-4 0h2v4H3zm-2 4h2v4H1zm8 0h2v4H9z", "fillRule": "evenodd"}),
        h('path', {"d": "M1 21h10v2H1z", "fillRule": "evenodd"})
      ]
    );
  }
});
