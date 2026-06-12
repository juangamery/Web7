import { defineComponent, h } from 'vue';

export const TvSharp = defineComponent({
  name: 'TvSharp',
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
        h('path', {"d": "M2 3h20v2H2zm0 2h2v10H2zm0 10h20v2H2zM20 5h2v10h-2zM6 19h12v2H6zm3-2h2v2H9zm4 0h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
