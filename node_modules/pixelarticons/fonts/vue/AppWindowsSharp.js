import { defineComponent, h } from 'vue';

export const AppWindowsSharp = defineComponent({
  name: 'AppWindowsSharp',
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
        h('path', {"d": "M2 3h20v2H2zm0 16h20v2H2zM2 5h2v14H2zm18 0h2v14h-2zM4 7h16v2H4zm8-2h2v2h-2zm4 0h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
