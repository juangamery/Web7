import { defineComponent, h } from 'vue';

export const ReloadSharp = defineComponent({
  name: 'ReloadSharp',
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
        h('path', {"d": "M16 4h2v6h-2zm-2-2h2v2h-2zm0 2h2v8h-2zM4 8H2v5h2z", "fillRule": "evenodd"}),
        h('path', {"d": "M2 6h18v2H2zm6 14H6v-6h2zm2 2H8v-2h2zm0-2H8v-8h2zm10-4h2v-5h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M22 18H4v-2h18z", "fillRule": "evenodd"})
      ]
    );
  }
});
