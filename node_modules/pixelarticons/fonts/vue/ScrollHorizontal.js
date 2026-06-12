import { defineComponent, h } from 'vue';

export const ScrollHorizontal = defineComponent({
  name: 'ScrollHorizontal',
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
        h('path', {"d": "M8 3v2H4V3zm0 16v2H4v-2zm6-16v2h-4V3zm0 16v2h-4v-2zm6-16v2h-4V3zm0 16v2h-4v-2zM18 9v6h2V9z", "fillRule": "evenodd"}),
        h('path', {"d": "M2 11v2h20v-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M16 7v10h2V7zM6 9v6H4V9zm2-2v10H6V7z", "fillRule": "evenodd"})
      ]
    );
  }
});
