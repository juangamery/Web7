import { defineComponent, h } from 'vue';

export const Download = defineComponent({
  name: 'Download',
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
        h('path', {"d": "M21 15v4h-2v-4zm-2 4v2H5v-2zM5 15v4H3v-4zm8-12v14h-2V3z", "fillRule": "evenodd"}),
        h('path', {"d": "M7 11v2h10v-2zm2 2v2h2v-2zm4 0v2h2v-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M15 11v2h2v-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
