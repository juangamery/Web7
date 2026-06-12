import { defineComponent, h } from 'vue';

export const SirenOff = defineComponent({
  name: 'SirenOff',
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
        h('path', {"d": "M6 11h2v5H6zm2-2h2v2H8zm2-2h4v2h-4zm4 2h2v2h-2zm2 2h2v5h-2zM6 16h12v2H6zm-2 4h16v2H4zm0-2h2v2H4zm14 0h2v2h-2zm-7-6h2v4h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
