import { defineComponent, h } from 'vue';

export const BlocksSharp = defineComponent({
  name: 'BlocksSharp',
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
        h('path', {"d": "M13 1h10v2H13zm0 2h2v6h-2zm0 6h10v2H13zm8-6h2v6h-2zM1 5h10v2H1zm0 2h2v16H1zm2 14h14v2H3zm14-8h2v10h-2zM3 13h14v2H3z", "fillRule": "evenodd"}),
        h('path', {"d": "M9 7h2v14H9z", "fillRule": "evenodd"})
      ]
    );
  }
});
