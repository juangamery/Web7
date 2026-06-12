import { defineComponent, h } from 'vue';

export const SortHorizontal = defineComponent({
  name: 'SortHorizontal',
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
        h('path', {"d": "M20 16v2H4v-2zm-10-2v2H6v-2zm0-2v2H8v-2zm0 6v2H6v-2zm0 2v2H8v-2zM4 6v2h16V6zm10-2v2h4V4zm0-2v2h2V2zm0 6v2h4V8zm0 2v2h2v-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
