import { defineComponent, h } from 'vue';

export const CardText = defineComponent({
  name: 'CardText',
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
        h('path', {"d": "M6 8h12v2H6zm0 4h8v2H6zM4 4h16v2H4zm0 14h16v2H4zM2 6h2v12H2zm18 0h2v12h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
