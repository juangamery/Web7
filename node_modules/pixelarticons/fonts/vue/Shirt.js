import { defineComponent, h } from 'vue';

export const Shirt = defineComponent({
  name: 'Shirt',
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
        h('path', {"d": "M4 3h6v2H4zM2 3h2v8H2zm2 6h4v2H4z", "fillRule": "evenodd"}),
        h('path', {"d": "M6 9h2v10H6zm2 10h8v2H8zm8-10h2v10h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M16 9h4v2h-4zm4-6h2v8h-2zm-6 0h6v2h-6zm-4 2h4v2h-4z", "fillRule": "evenodd"})
      ]
    );
  }
});
