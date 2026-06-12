import { defineComponent, h } from 'vue';

export const AlignVerticalJustifyEndSharp = defineComponent({
  name: 'AlignVerticalJustifyEndSharp',
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
        h('path', {"d": "M2 20h20v2H2zm2-4v-3h2v3zm0 2v-2h16v2zm14-2v-3h2v3zM4 13v-2h16v2zm3-6V4h2v3zm0 2V7h10v2zm8-2V4h2v3zM7 4V2h10v2z", "fillRule": "evenodd"})
      ]
    );
  }
});
