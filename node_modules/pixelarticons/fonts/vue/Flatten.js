import { defineComponent, h } from 'vue';

export const Flatten = defineComponent({
  name: 'Flatten',
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
        h('path', {"d": "M4 16h16v2H4zm4 4h8v2H8zm3-18h2v12h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M9 10h6v2H9zM7 8h10v2H7z", "fillRule": "evenodd"})
      ]
    );
  }
});
