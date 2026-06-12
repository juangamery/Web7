import { defineComponent, h } from 'vue';

export const AlignStartHorizontalSharp = defineComponent({
  name: 'AlignStartHorizontalSharp',
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
        h('path', {"d": "M5 22h4v-2H5zm-2 0h2V6H3zM5 8h4V6H5zm4 14h2V6H9zm6-7h4v-2h-4zm-2 0h2V6h-2zm2-7h4V6h-4zm4 7h2V6h-2zM2 4h20V2H2z", "fillRule": "evenodd"})
      ]
    );
  }
});
