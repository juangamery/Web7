import { defineComponent, h } from 'vue';

export const MusicSharp = defineComponent({
  name: 'MusicSharp',
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
        h('path', {"d": "M2 12h8v2H2zm0 2h2v4H2zm0 4h8v2H2z", "fillRule": "evenodd"}),
        h('path', {"d": "M8 6h2v12H8zm10 0h2v12h-2zm-6 8h2v4h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M12 12h8v2h-8zm0 6h8v2h-8zM8 4h12v2H8z", "fillRule": "evenodd"})
      ]
    );
  }
});
