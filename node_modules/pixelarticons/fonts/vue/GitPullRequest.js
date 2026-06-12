import { defineComponent, h } from 'vue';

export const GitPullRequest = defineComponent({
  name: 'GitPullRequest',
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
        h('path', {"d": "M4 10h4V8H4zm0-6h4V2H4zM2 8h2V4H2zm6 0h2V4H8zm8 14h4v-2h-4zm0-6h4v-2h-4zm-2 4h2v-4h-2zm6 0h2v-4h-2zM12 7h5V5h-5zM5 22h2V12H5z", "fillRule": "evenodd"})
      ]
    );
  }
});
