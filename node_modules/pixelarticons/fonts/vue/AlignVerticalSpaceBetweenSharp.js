import { defineComponent, h } from 'vue';

export const AlignVerticalSpaceBetweenSharp = defineComponent({
  name: 'AlignVerticalSpaceBetweenSharp',
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
        h('path', {"d": "M4 19v-3h2v3zm-2 2v-2h20v2zm16-2v-3h2v3zM4 16v-2h16v2zm3-8V5h2v3zm0 2V8h10v2zm8-2V5h2v3zM2 5V3h20v2z", "fillRule": "evenodd"})
      ]
    );
  }
});
