import { defineComponent, h } from 'vue';

export const UploadSharp = defineComponent({
  name: 'UploadSharp',
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
        h('path', {"d": "M5 19h14v-4h2v6H3v-6h2v4Zm8-14h2v2h2v2h-4v8h-2V9H7V7h2V5h2V3h2v2Z", "fillRule": "evenodd"})
      ]
    );
  }
});
