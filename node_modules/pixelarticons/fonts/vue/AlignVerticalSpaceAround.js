import { defineComponent, h } from 'vue';

export const AlignVerticalSpaceAround = defineComponent({
  name: 'AlignVerticalSpaceAround',
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
        h('path', {"d": "M18 10v4h-2v-4zm-2-2v2H8V8zm-8 2v4H6v-4zm8 4v2H8v-2zm6-10H2v2h20zm0 14H2v2h20z", "fillRule": "evenodd"})
      ]
    );
  }
});
