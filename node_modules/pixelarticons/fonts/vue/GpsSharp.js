import { defineComponent, h } from 'vue';

export const GpsSharp = defineComponent({
  name: 'GpsSharp',
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
        h('path', {"d": "M7 5h10v2H7zm10 0h2v14h-2zM7 17h10v2H7zM5 5h2v14H5zm14 6h4v2h-4zM1 11h4v2H1zM11 1h2v4h-2zm0 18h2v4h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
