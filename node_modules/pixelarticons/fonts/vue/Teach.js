import { defineComponent, h } from 'vue';

export const Teach = defineComponent({
  name: 'Teach',
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
        h('path', {"d": "M3 2h4v4H3zM2 8h12v2H2zm7-4h11v2H9zm1 10h10v2H10z", "fillRule": "evenodd"}),
        h('path', {"d": "M2 9h6v7H2zm0 7h2v4H2zm4 0h2v4H6zM20 6h2v8h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
