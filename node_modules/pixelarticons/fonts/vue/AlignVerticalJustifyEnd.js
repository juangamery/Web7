import { defineComponent, h } from 'vue';

export const AlignVerticalJustifyEnd = defineComponent({
  name: 'AlignVerticalJustifyEnd',
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
        h('path', {"d": "M2 20h20v2H2zm2-4v-3h2v3zm2 2v-2h12v2zm12-2v-3h2v3zM6 13v-2h12v2zm1-6V4h2v3zm2 2V7h6v2zm6-2V4h2v3zM9 4V2h6v2z", "fillRule": "evenodd"})
      ]
    );
  }
});
