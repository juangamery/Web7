import { defineComponent, h } from 'vue';

export const ArrowBigDownDash = defineComponent({
  name: 'ArrowBigDownDash',
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
        h('path', {"d": "M8 3h8v2H8zm0 4h8v2H8z", "fillRule": "evenodd"}),
        h('path', {"d": "M8 7h2v4H8zm-5 4h5v2H3zm0 2h2v2H3zm2 2h2v2H5zm2 2h2v2H7zm2 2h2v2H9zm2 2h2v2h-2zm2-2h2v2h-2zm2-2h2v2h-2zm2-2h2v2h-2zm2-4h2v4h-2zm-3 0h3v2h-3zm-2-4h2v4h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
