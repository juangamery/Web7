import { defineComponent, h } from 'vue';

export const FolderPlus = defineComponent({
  name: 'FolderPlus',
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
        h('path', {"d": "M4 4h6v2H4zm0 14h10v2H4zM20 8h2v6h-2zM2 6h2v12H2zm8 0h10v2H10zm12 12v2h-6v-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M18 16h2v6h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
