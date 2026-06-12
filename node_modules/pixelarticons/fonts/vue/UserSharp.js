import { defineComponent, h } from 'vue';

export const UserSharp = defineComponent({
  name: 'UserSharp',
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
        h('path', {"d": "M7 2h10v2H7zm0 8h10v2H7zm8-6h2v6h-2zM7 4h2v6H7zM4 14h2v8H4zm14 0h2v8h-2zM6 14h12v2H6z", "fillRule": "evenodd"})
      ]
    );
  }
});
