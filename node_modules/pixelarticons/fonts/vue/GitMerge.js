import { defineComponent, h } from 'vue';

export const GitMerge = defineComponent({
  name: 'GitMerge',
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
        h('path', {"d": "M4 2h4v2H4zm0 6h4v2H4zM2 4h2v4H2zm6 0h2v4H8zm8 10h4v2h-4zm0 6h4v2h-4zm-2-4h2v4h-2zm6 0h2v4h-2zM5 12h2v10H5zm7 0h2v2h-2zm-2-2h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
