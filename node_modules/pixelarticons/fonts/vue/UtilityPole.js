import { defineComponent, h } from 'vue';

export const UtilityPole = defineComponent({
  name: 'UtilityPole',
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
        h('path', {"d": "M11 2h2v20h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M1 5h22v2H1zm8 6h2v2H9zm4 0h2v2h-2zm2-2h2v2h-2zm2-2h2v2h-2zm2-4h2v2h-2zm-4 0h2v2h-2zM7 3h2v2H7zM3 3h2v2H3zm4 6h2v2H7zM5 7h2v2H5z", "fillRule": "evenodd"})
      ]
    );
  }
});
