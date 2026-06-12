import { defineComponent, h } from 'vue';

export const Volume1 = defineComponent({
  name: 'Volume1',
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
        h('path', {"d": "M15 22h-2v-2h-2v-2h2V6h-2V4h2V2h2v20Zm-4-4H9v-2h2v2ZM9 8v2H7v4h2v2H5V8h4Zm10 6h-2v-4h2v4Zm-8-6H9V6h2v2Z", "fillRule": "evenodd"})
      ]
    );
  }
});
