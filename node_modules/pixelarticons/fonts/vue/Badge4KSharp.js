import { defineComponent, h } from 'vue';

export const Badge4KSharp = defineComponent({
  name: 'Badge4KSharp',
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
        h('path', {"d": "M1 4h22v2H1zm0 14h22v2H1zM1 6h2v12H1zm20 0h2v12h-2zM5 8h2v5H5zm4 0h2v8H9zm4 0h2v8h-2zm4 0h2v3h-2zm0 5h2v3h-2zm-2-2h2v2h-2zm-8 0h2v2H7z", "fillRule": "evenodd"})
      ]
    );
  }
});
