import { defineComponent, h } from 'vue';

export const WavesArrowUp = defineComponent({
  name: 'WavesArrowUp',
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
        h('path', {"d": "M2 21h4v-2H2zm0-6h4v-2H2zm4 8h4v-2H6zm0-6h4v-2H6zm4 4h4v-2h-4zm4 2h4v-2h-4zm0-6h4v-2h-4zm-4-2h4v-2h-4zm8 6h4v-2h-4zm0-6h4v-2h-4zm-7-4h2V1h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M9 5h6V3H9zM7 7h10V5H7z", "fillRule": "evenodd"})
      ]
    );
  }
});
