import { defineComponent, h } from 'vue';

export const UserPlus = defineComponent({
  name: 'UserPlus',
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
        h('path', {"d": "M9 2h6v2H9zm0 8h6v2H9zm6-6h2v6h-2zM7 4h2v6H7zM4 18h2v4H4zm14 0h2v4h-2zM8 14h8v2H8zm-2 2h2v2H6z", "fillRule": "evenodd"}),
        h('path', {"d": "M18 16h2v6h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M16 18h6v2h-6z", "fillRule": "evenodd"})
      ]
    );
  }
});
