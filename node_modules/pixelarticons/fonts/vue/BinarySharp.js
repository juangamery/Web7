import { defineComponent, h } from 'vue';

export const BinarySharp = defineComponent({
  name: 'BinarySharp',
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
        h('path', {"d": "M5 3h6v2H5zm8 10h6v2h-6zM5 5h2v4H5zm8 10h2v4h-2zM9 5h2v4H9zm8 10h2v4h-2zM5 9h6v2H5zm8 10h6v2h-6zm0-16h4v2h-4zM5 13h4v2H5zm10-8h2v4h-2zM7 15h2v4H7zm6-6h6v2h-6zM5 19h6v2H5z", "fillRule": "evenodd"})
      ]
    );
  }
});
