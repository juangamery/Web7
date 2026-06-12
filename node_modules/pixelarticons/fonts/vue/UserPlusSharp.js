import { defineComponent, h } from 'vue';

export const UserPlusSharp = defineComponent({
  name: 'UserPlusSharp',
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
        h('path', {"d": "M18 18h2v4h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M18 16h2v6h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M16 18h6v2h-6zM7 2h10v2H7zm0 8h10v2H7zm8-6h2v6h-2zM7 4h2v6H7zM4 14h2v8H4zm2 0h8v2H6z", "fillRule": "evenodd"})
      ]
    );
  }
});
