import { defineComponent, h } from 'vue';

export const AlignVerticalSpaceAroundSharp = defineComponent({
  name: 'AlignVerticalSpaceAroundSharp',
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
        h('path', {"d": "M18 10v4h-2v-4zm0-2v2H6V8zM8 10v4H6v-4zm10 4v2H6v-2zm4-10H2v2h20zm0 14H2v2h20z", "fillRule": "evenodd"})
      ]
    );
  }
});
