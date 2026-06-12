import { defineComponent, h } from 'vue';

export const ThermometerSharp = defineComponent({
  name: 'ThermometerSharp',
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
        h('path', {"d": "M7 2h10v2H7zm0 18h10v2H7zm4-4h2v2h-2zM7 4h2v16H7zm8 0h2v16h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M5 16h4v2H5zM5 6h4v2H5zm0 5h4v2H5z", "fillRule": "evenodd"})
      ]
    );
  }
});
