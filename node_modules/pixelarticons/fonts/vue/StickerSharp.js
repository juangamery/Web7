import { defineComponent, h } from 'vue';

export const StickerSharp = defineComponent({
  name: 'StickerSharp',
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
        h('path', {"d": "M4 4H2v16h2zm14-2H2v2h16zm4 4h-2v14h2zm0 14H2v2h20zM18 4h2v2h-2zm-4 0h2v4h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M14 6h6v2h-6zm-6 8h2v2H8zm6 0h2v2h-2zm-4 2h4v2h-4zm-2-6h2v2H8zm6 0h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
