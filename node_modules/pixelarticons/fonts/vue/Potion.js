import { defineComponent, h } from 'vue';

export const Potion = defineComponent({
  name: 'Potion',
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
        h('path', {"d": "M8 6h8v2H8zm0-4h8v2H8zm0 6h2v2H8zm6 0h2v2h-2zM6 20h12v2H6zm-2-8h2v8H4zm14 0h2v8h-2zM6 10h2v2H6zm10 0h2v2h-2zM6 4h2v2H6zm10 0h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
