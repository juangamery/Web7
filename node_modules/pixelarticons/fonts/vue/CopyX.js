import { defineComponent, h } from 'vue';

export const CopyX = defineComponent({
  name: 'CopyX',
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
        h('path', {"d": "M8 6h12v2H8zM4 2h12v2H4zm2 6h2v12H6zM2 4h2v12H2zm6 16h12v2H8zM20 8h2v12h-2zm-4-4h2v2h-2zM4 16h2v2H4zm7-5h2v2h-2zm4 4h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zm2-2h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
