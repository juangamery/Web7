import { defineComponent, h } from 'vue';

export const AiFile = defineComponent({
  name: 'AiFile',
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
        h('path', {"d": "M6 4H4v8h2zm10-2H6v2h10zm4 4h-2v14h2zm-2 14h-4v2h4zM16 4h2v2h-2zm-4 0h2v6h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M12 8h6v2h-6zM2 16h2v6H2zm4 0h2v6H6zm4-2h2v8h-2zm-6 0h2v2H4zm0 4h2v2H4z", "fillRule": "evenodd"})
      ]
    );
  }
});
