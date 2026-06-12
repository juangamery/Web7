import { defineComponent, h } from 'vue';

export const Brackets = defineComponent({
  name: 'Brackets',
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
        h('path', {"d": "M5 4h4v2H5zm14 0h-4v2h4zM5 20h4v-2H5zm14 0h-4v-2h4zM3 6h2v12H3zm18 0h-2v12h2z", "fillRule": "evenodd"})
      ]
    );
  }
});
