import { defineComponent, h } from 'vue';

export const AlignVerticalJustifyCenter = defineComponent({
  name: 'AlignVerticalJustifyCenter',
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
        h('path', {"d": "M2 13h20v-2H2zm2 4v3h2v-3zm2-2v2h12v-2zm12 2v3h2v-3zM6 20v2h12v-2zM7 7V4h2v3zm2 2V7h6v2zm6-2V4h2v3zM9 4V2h6v2z", "fillRule": "evenodd"})
      ]
    );
  }
});
