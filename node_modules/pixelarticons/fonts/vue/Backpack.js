import { defineComponent, h } from 'vue';

export const Backpack = defineComponent({
  name: 'Backpack',
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
        h('path', {"d": "M5 6h14v2H5zM3 8h2v12H3zm2 12h14v2H5zM19 8h2v12h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M7 16h2v6H7zm8 0h2v6h-2zm-6-2h6v2H9zm-2-4h10v2H7zm1-6h2v2H8zm6 0h2v2h-2zm-4-2h4v2h-4z", "fillRule": "evenodd"})
      ]
    );
  }
});
