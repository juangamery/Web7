import { defineComponent, h } from 'vue';

export const Plus = defineComponent({
  name: 'Plus',
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
        h('path', {"d": "M13 11h7v2h-7v7h-2v-7H4v-2h7V4h2v7Z", "fillRule": "evenodd"})
      ]
    );
  }
});
