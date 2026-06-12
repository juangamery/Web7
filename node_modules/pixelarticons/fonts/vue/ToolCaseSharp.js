import { defineComponent, h } from 'vue';

export const ToolCaseSharp = defineComponent({
  name: 'ToolCaseSharp',
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
        h('path', {"d": "M2 11h20v2H2zm0 2h2v8H2zm0 8h20v2H2zm18-8h2v8h-2zM9 15h6v2H9zM4 8h2v3H4zm0-2h10v2H4zm8 2h2v3h-2zM8 2h2v4H8zm10 1h2v8h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M8 2h12v2H8z", "fillRule": "evenodd"})
      ]
    );
  }
});
