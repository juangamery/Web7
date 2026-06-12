import { defineComponent, h } from 'vue';

export const RobotFaceSharp = defineComponent({
  name: 'RobotFaceSharp',
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
        h('path', {"d": "M2 6h20v2H2zm0 14h20v2H2zM2 8h2v12H2zm18 0h2v12h-2zm-9-6h2v4h-2zm-3 8h2v2H8zm6 0h4v2h-4zm-1-8h4v2h-4zM0 12h2v2H0zm22 0h2v2h-2zm-12 4h4v2h-4zm-2-2h2v2H8zm6 0h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
