import { defineComponent, h } from 'vue';

export const FolderSharp = defineComponent({
  name: 'FolderSharp',
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
        h('path', {"d": "M2 4h10v2H2zm0 14h20v2H2zM20 6h2v12h-2zM2 6h2v12H2zm8 0h10v2H10z", "fillRule": "evenodd"})
      ]
    );
  }
});
