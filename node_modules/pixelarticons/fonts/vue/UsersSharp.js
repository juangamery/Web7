import { defineComponent, h } from 'vue';

export const UsersSharp = defineComponent({
  name: 'UsersSharp',
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
        h('path', {"d": "M3 2h10v2H3zm12 0h6v2h-6zM3 10h10v2H3zm12 0h6v2h-6zm-4-6h2v6h-2zm8 0h2v6h-2zM3 4h2v6H3zM0 14h2v8H0zm14 0h2v8h-2zm8 0h2v8h-2zM2 14h12v2H2zm16 0h4v2h-4z", "fillRule": "evenodd"})
      ]
    );
  }
});
