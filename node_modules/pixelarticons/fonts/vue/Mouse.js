import { defineComponent, h } from 'vue';

export const Mouse = defineComponent({
  name: 'Mouse',
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
        h('path', {"d": "M8 2h8v2H8zm0 20h8v-2H8zM6 4h2v2H6zm0 16h2v-2H6zM16 4h2v2h-2zm0 16h2v-2h-2zM4 6h2v12H4zm14 0h2v12h-2zm-7 0h2v4h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
