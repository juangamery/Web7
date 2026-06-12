import { defineComponent, h } from 'vue';

export const Smartphone = defineComponent({
  name: 'Smartphone',
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
        h('path', {"d": "M6 2h12v2H6zm0 18h12v2H6zM4 4h2v16H4zm14 0h2v16h-2zm-7 13h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
