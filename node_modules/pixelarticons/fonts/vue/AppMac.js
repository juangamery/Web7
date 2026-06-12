import { defineComponent, h } from 'vue';

export const AppMac = defineComponent({
  name: 'AppMac',
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
        h('path', {"d": "M4 3h16v2H4zm0 16h16v2H4zM2 5h2v14H2zm18 0h2v14h-2zM6 7h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
