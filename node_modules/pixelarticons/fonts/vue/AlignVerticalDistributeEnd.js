import { defineComponent, h } from 'vue';

export const AlignVerticalDistributeEnd = defineComponent({
  name: 'AlignVerticalDistributeEnd',
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
        h('path', {"d": "M4 18v-3h2v3zm-2 2v-2h20v2zm16-2v-3h2v3zM6 15v-2h12v2zm1-9v3h2V6zm2-2v2h6V4zm6 2v3h2V6zM2 9v2h20V9z", "fillRule": "evenodd"})
      ]
    );
  }
});
