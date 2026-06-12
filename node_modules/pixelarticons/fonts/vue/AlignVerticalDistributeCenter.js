import { defineComponent, h } from 'vue';

export const AlignVerticalDistributeCenter = defineComponent({
  name: 'AlignVerticalDistributeCenter',
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
        h('path', {"d": "M8 19v-4H6v4zm2-10V5H8v4zm6 6v-2H8v2zM14 5V3h-4v2zm4 14v-4h-2v4zM16 9V5h-2v4zm0 12v-2H8v2zm-2-10V9h-4v2zM2 18v-2h4v2zm16 0v-2h4v2zM16 8V6h6v2zM2 8V6h6v2z", "fillRule": "evenodd"})
      ]
    );
  }
});
