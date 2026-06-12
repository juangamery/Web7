import { defineComponent, h } from 'vue';

export const AlignHorizontalSpaceAroundSharp = defineComponent({
  name: 'AlignHorizontalSpaceAroundSharp',
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
        h('path', {"d": "M10 6h4v2h-4zM8 6h2v12H8zm2 10h4v2h-4zm4-10h2v12h-2zM4 2v20h2V2zm14 0v20h2V2z", "fillRule": "evenodd"})
      ]
    );
  }
});
