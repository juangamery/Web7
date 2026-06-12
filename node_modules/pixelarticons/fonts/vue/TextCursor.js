import { defineComponent, h } from 'vue';

export const TextCursor = defineComponent({
  name: 'TextCursor',
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
        h('path', {"d": "M5 2h4v2H5zm0 20h4v-2H5zM9 4h2v2H9zm0 16h2v-2H9zm4-16h2v2h-2zm0 16h2v-2h-2zm2-18h4v2h-4zm0 20h4v-2h-4zM11 6h2v12h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
