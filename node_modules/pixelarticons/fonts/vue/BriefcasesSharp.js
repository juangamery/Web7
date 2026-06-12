import { defineComponent, h } from 'vue';

export const BriefcasesSharp = defineComponent({
  name: 'BriefcasesSharp',
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
        h('path', {"d": "M6 8h2v8H6zm14 0h2v8h-2zM6 6h16v2H6zm0 10h16v2H6zm-4-4h2v8H2zm0 8h16v2H2zm8-16h2v2h-2zm0-2h8v2h-8zm6 2h2v2h-2zM2 10h4v2H2zm14 8h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
