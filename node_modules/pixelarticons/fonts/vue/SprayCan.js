import { defineComponent, h } from 'vue';

export const SprayCan = defineComponent({
  name: 'SprayCan',
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
        h('path', {"d": "M9 3h4v4H9zM7 7h8v2H7zM5 21h12v2H5zM15 9h2v12h-2zM5 9h2v12H5zm4 8h6v2H9z", "fillRule": "evenodd"}),
        h('path', {"d": "M9 13h2v6H9z", "fillRule": "evenodd"}),
        h('path', {"d": "M9 13h8v2H9zm6-10h2v2h-2zm2-2h2v2h-2zm0 4h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
