import { defineComponent, h } from 'vue';

export const TestTube = defineComponent({
  name: 'TestTube',
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
        h('path', {"d": "M7 2h10v2H7zm1 2h2v16H8zm2 16h4v2h-4zm4-16h2v16h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M8 13h8v2H8z", "fillRule": "evenodd"})
      ]
    );
  }
});
