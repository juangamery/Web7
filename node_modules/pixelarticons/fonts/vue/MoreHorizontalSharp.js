import { defineComponent, h } from 'vue';

export const MoreHorizontalSharp = defineComponent({
  name: 'MoreHorizontalSharp',
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
        h('path', {"d": "M1 9h6v2H1zm8 0h6v2H9zm8 0h6v2h-6zM1 11h2v2H1zm8 0h2v2H9zm8 0h2v2h-2zM1 13h6v2H1zm8 0h6v2H9zm8 0h6v2h-6zM5 11h2v2H5zm8 0h2v2h-2zm8 0h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
