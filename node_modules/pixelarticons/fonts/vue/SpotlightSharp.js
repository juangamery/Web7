import { defineComponent, h } from 'vue';

export const SpotlightSharp = defineComponent({
  name: 'SpotlightSharp',
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
        h('path', {"d": "M21 2H3v2h18V2Zm0 18H3v2h18v-2ZM5 4H3v16h2V4Zm16 0h-2v16h2V4Zm-8 2H7v2h6V6Zm-4 4H7v8h2v-8Zm8 0h-2v8h2v-8Zm-8 0h6v2H9zm0 6h6v2H9z", "fillRule": "evenodd"})
      ]
    );
  }
});
