import { defineComponent, h } from 'vue';

export const BracketsOff = defineComponent({
  name: 'BracketsOff',
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
        h('path', {"d": "M19 3h-4v2h4zM5 21h4v-2H5zm14 0h-4v-2h4zM3 5h2v14H3zm18 0h-2v10h2zM3 3h2v2H3zm2 2h2v2H5zm2 2h2v2H7zm2 2h2v2H9zm2 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
