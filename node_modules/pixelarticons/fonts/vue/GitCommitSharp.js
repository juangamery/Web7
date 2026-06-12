import { defineComponent, h } from 'vue';

export const GitCommitSharp = defineComponent({
  name: 'GitCommitSharp',
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
        h('path', {"d": "M7 7h10v2H7zm0 2h2v6H7zm0 6h10v2H7zm8-6h2v6h-2zM0 11h5v2H0zm19 0h5v2h-5z", "fillRule": "evenodd"})
      ]
    );
  }
});
