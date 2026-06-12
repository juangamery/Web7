import { defineComponent, h } from 'vue';

export const ArrowRight = defineComponent({
  name: 'ArrowRight',
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
        h('path', {"d": "M4 11v2h16v-2zm12 2v2h2v-2zm-2 2v2h2v-2zm-2 2v2h2v-2zm4-6V9h2v2z", "fillRule": "evenodd"}),
        h('path', {"d": "M14 15V7h2v8zm-2 2V5h2v12z", "fillRule": "evenodd"})
      ]
    );
  }
});
