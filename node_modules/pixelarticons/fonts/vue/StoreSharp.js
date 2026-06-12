import { defineComponent, h } from 'vue';

export const StoreSharp = defineComponent({
  name: 'StoreSharp',
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
        h('path', {"d": "M3 13h2v8H3zm0 8h18v2H3zm16-8h2v8h-2zm-9-2h4v2h-4zm4-2h4v2h-4zm4 2h4v2h-4zM6 9h4v2H6zm-4 2h4v2H2zM0 5h2v6H0zm22 0h2v6h-2zM0 3h24v2H0zm8 12h8v2H8zm0 2h2v4H8zm6 0h2v4h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
