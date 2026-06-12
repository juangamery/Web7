import { defineComponent, h } from 'vue';

export const CirclePile = defineComponent({
  name: 'CirclePile',
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
        h('path', {"d": "M11 2h2v2h-2zM7 9h2v2H7zm8 0h2v2h-2zM3 16h2v2H3zm8 0h2v2h-2zm8 0h2v2h-2zM9 4h2v2H9zm-4 7h2v2H5zm8 0h2v2h-2zM1 18h2v2H1zm8 0h2v2H9zm8 0h2v2h-2zM11 6h2v2h-2zm-4 7h2v2H7zm8 0h2v2h-2zM3 20h2v2H3zm8 0h2v2h-2zm8 0h2v2h-2zM13 4h2v2h-2zm-4 7h2v2H9zm8 0h2v2h-2zM5 18h2v2H5zm8 0h2v2h-2zm8 0h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
