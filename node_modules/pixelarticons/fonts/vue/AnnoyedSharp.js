import { defineComponent, h } from 'vue';

export const AnnoyedSharp = defineComponent({
  name: 'AnnoyedSharp',
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
        h('path', {"d": "M2 20h20v2H2zM2 2h20v2H2zm0 2h2v16H2zm18 0h2v16h-2zM7 8h3v2H7zm7 0h3v2h-3zm-7 6h10v2H7z", "fillRule": "evenodd"})
      ]
    );
  }
});
