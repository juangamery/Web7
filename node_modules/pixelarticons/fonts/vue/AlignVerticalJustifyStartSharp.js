import { defineComponent, h } from 'vue';

export const AlignVerticalJustifyStartSharp = defineComponent({
  name: 'AlignVerticalJustifyStartSharp',
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
        h('path', {"d": "M2 4h20V2H2zm5 4v3h2V8zm0-2v2h10V6zm8 2v3h2V8zm-8 3v2h10v-2zm-3 6v3h2v-3zm0-2v2h16v-2zm14 2v3h2v-3zM4 20v2h16v-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
