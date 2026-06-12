import { defineComponent, h } from 'vue';

export const GitCommit = defineComponent({
  name: 'GitCommit',
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
        h('path', {"d": "M9 7h6v2H9zM7 9h2v6H7zm2 6h6v2H9zm6-6h2v6h-2zM0 11h5v2H0zm19 0h5v2h-5z", "fillRule": "evenodd"})
      ]
    );
  }
});
