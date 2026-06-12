import { defineComponent, h } from 'vue';

export const ServerSharp = defineComponent({
  name: 'ServerSharp',
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
        h('path', {"d": "M6 7h4v2H6zm0 8h4v2H6zM2 5h2v14H2zm18 0h2v14h-2zM2 19h20v2H2zM2 3h20v2H2z", "fillRule": "evenodd"}),
        h('path', {"d": "M2 11h20v2H2z", "fillRule": "evenodd"})
      ]
    );
  }
});
