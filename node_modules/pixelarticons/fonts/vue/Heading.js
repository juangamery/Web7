import { defineComponent, h } from 'vue';

export const Heading = defineComponent({
  name: 'Heading',
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
        h('path', {"d": "M5 4h2v16H5z", "fillRule": "evenodd"}),
        h('path', {"d": "M5 11h14v2H5z", "fillRule": "evenodd"}),
        h('path', {"d": "M17 4h2v16h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
