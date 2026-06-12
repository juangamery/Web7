import { defineComponent, h } from 'vue';

export const BadgeHdSharp = defineComponent({
  name: 'BadgeHdSharp',
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
        h('path', {"d": "M1 4h22v2H1zm0 14h22v2H1zM1 6h2v12H1zm20 0h2v12h-2zM5 8h2v8H5zm4 0h2v8H9zm4 0h2v8h-2zm2 0h2v2h-2zm0 6h2v2h-2zm2-4h2v4h-2zM7 11h2v2H7z", "fillRule": "evenodd"})
      ]
    );
  }
});
