import { defineComponent, h } from 'vue';

export const ArrowLeft = defineComponent({
  name: 'ArrowLeft',
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
        h('path', {"d": "M20 11v2H4v-2zM8 13v2H6v-2zm2 2v2H8v-2zm2 2v2h-2v-2zm-4-6V9H6v2z", "fillRule": "evenodd"}),
        h('path', {"d": "M10 15V7H8v8zm2 2V5h-2v12z", "fillRule": "evenodd"})
      ]
    );
  }
});
