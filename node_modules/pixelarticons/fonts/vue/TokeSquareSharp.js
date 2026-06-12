import { defineComponent, h } from 'vue';

export const TokeSquareSharp = defineComponent({
  name: 'TokeSquareSharp',
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
        h('path', {"d": "M2 2h20v2H2zm0 18h20v2H2zM2 4h2v16H2zm18 0h2v16h-2zm-9 3h2v2h-2zm0 8h2v2h-2zm-4-4h2v2H7zm8 0h2v2h-2zM9 9h2v2H9zm4 0h2v2h-2zm0 4h2v2h-2zm-4 0h2v2H9z", "fillRule": "evenodd"})
      ]
    );
  }
});
