import { defineComponent, h } from 'vue';

export const ShuffleSharp = defineComponent({
  name: 'ShuffleSharp',
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
        h('path', {"d": "M18 7h2v2h2v2h-2v2h-2v2h-2v-4h-4v8H2v-2h8V9h6V5h2v2Zm4 12h-8v-2h8v2ZM8 11H2V9h6v2Z", "fillRule": "evenodd"})
      ]
    );
  }
});
