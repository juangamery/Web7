import { defineComponent, h } from 'vue';

export const BracesOffSharp = defineComponent({
  name: 'BracesOffSharp',
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
        h('path', {"d": "M8 3h2v2H8zm12 0h-6v2h6zM4 21h6v-2H4zm14 0h-4v-2h4zM4 5h2v6H4zm16 0h-2v6h2zM4 19h2v-6H4zm16-4h-2v-2h2zM2 11h2v2H2zm20 0h-2v2h2zM2 3h2v2H2z", "fillRule": "evenodd"}),
        h('path', {"d": "M4 5h2v2H4zm2 2h2v2H6zm2 2h2v2H8zm2 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
