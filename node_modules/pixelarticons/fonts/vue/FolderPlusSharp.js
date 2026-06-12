import { defineComponent, h } from 'vue';

export const FolderPlusSharp = defineComponent({
  name: 'FolderPlusSharp',
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
        h('path', {"d": "M2 4h10v2H2zm0 14h12v2H2zM20 6h2v8h-2zM2 6h2v12H2zm8 0h10v2H10zm12 12v2h-6v-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M18 16h2v6h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
