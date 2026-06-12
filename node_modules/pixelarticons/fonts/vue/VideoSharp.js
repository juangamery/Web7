import { defineComponent, h } from 'vue';

export const VideoSharp = defineComponent({
  name: 'VideoSharp',
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
        h('path', {"d": "M20 17V7h2v10zm-2-2V9h2v6zM2 7h2v10H2zm14 0h2v10h-2zM2 5h16v2H2zm0 12h16v2H2z", "fillRule": "evenodd"})
      ]
    );
  }
});
