import { defineComponent, h } from 'vue';

export const GitPullRequestSharp = defineComponent({
  name: 'GitPullRequestSharp',
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
        h('path', {"d": "M2 10h8V8H2zm0-6h8V2H2zm0 4h2V4H2zm6 0h2V4H8zm6 14h8v-2h-8zm0-6h8v-2h-8zm0 4h2v-4h-2zm6 0h2v-4h-2zM12 7h5V5h-5zM5 22h2V12H5z", "fillRule": "evenodd"})
      ]
    );
  }
});
