import { defineComponent, h } from 'vue';

export const AlignHorizontalSpaceAround = defineComponent({
  name: 'AlignHorizontalSpaceAround',
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
        h('path', {"d": "M10 6h4v2h-4zM8 8h2v8H8zm2 8h4v2h-4zm4-8h2v8h-2zM4 2v20h2V2zm14 0v20h2V2z", "fillRule": "evenodd"})
      ]
    );
  }
});
