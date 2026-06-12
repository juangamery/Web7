import { defineComponent, h } from 'vue';

export const Open = defineComponent({
  name: 'Open',
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
        h('path', {"d": "M5 5h6v2H5zm8-2h8v2h-8zM5 19h12v2H5zM3 7h2v12H3zm14 6h2v6h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M19 3h2v8h-2zm-8 8h2v2h-2zm6-4h-2v2h2zm2-2h-2v2h2zm-4 4h-2v2h2zm-4 4H9v2h2z", "fillRule": "evenodd"})
      ]
    );
  }
});
