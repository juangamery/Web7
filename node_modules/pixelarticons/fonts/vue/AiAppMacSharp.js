import { defineComponent, h } from 'vue';

export const AiAppMacSharp = defineComponent({
  name: 'AiAppMacSharp',
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
        h('path', {"d": "M2 3h20v2H2zm0 16h8v2H2zM2 5h2v14H2zm18 0h2v8h-2zM6 7h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2zm2 6h2v2h-2zm0 8h2v2h-2zm-4-4h2v2h-2zm8 0h2v2h-2zm-6-2h2v2h-2zm4 0h2v2h-2zm0 4h2v2h-2zm-4 0h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
