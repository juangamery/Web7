import { defineComponent, h } from 'vue';

export const Warehouse = defineComponent({
  name: 'Warehouse',
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
        h('path', {"d": "M6 10h12v2H6z", "fillRule": "evenodd"}),
        h('path', {"d": "M6 10h2v10H6zm2 5h8v2H8zm-6 5h20v2H2zm14-10h2v10h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M2 6h2v16H2z", "fillRule": "evenodd"}),
        h('path', {"d": "M2 6h4v2H2zm4-2h4v2H6zm8 0h4v2h-4zm4 2h4v2h-4zm-8-4h4v2h-4z", "fillRule": "evenodd"}),
        h('path', {"d": "M20 6h2v16h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
