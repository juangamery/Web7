import { defineComponent, h } from 'vue';

export const SprayWave = defineComponent({
  name: 'SprayWave',
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
        h('path', {"d": "M4 9h6v2H4zm2-2h2v2H6zm-4 4h2v10H2zm2 8h6v2H4zm6-8h2v10h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M6 15h6v2H6zm8-11h2v2h-2zm4-2h2v2h-2zm0 10h2v2h-2zm-2-6h2v4h-2zm4-2h2v8h-2zm-6 6h2v2h-2zm-3-3h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
