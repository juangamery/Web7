import { defineComponent, h } from 'vue';

export const HandbagSharp = defineComponent({
  name: 'HandbagSharp',
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
        h('path', {"d": "M7 4h2v7H7zm2-2h6v2H9zm6 2h2v7h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M1 7h22v2H1zm20 2h2v11h-2zM3 9H1v11h2zM1 20h22v2H1z", "fillRule": "evenodd"})
      ]
    );
  }
});
