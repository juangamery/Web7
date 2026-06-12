import { defineComponent, h } from 'vue';

export const AlignStartVertical = defineComponent({
  name: 'AlignStartVertical',
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
        h('path', {"d": "M22 5v4h-2V5zm-2-2v2H8V3zM8 5v4H6V5zm12 4v2H8V9zm-5 6v4h-2v-4zm-2-2v2H8v-2zm-5 2v4H6v-4zm5 4v2H8v-2zM4 2v20H2V2z", "fillRule": "evenodd"})
      ]
    );
  }
});
