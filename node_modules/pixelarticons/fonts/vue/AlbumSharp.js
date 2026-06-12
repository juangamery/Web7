import { defineComponent, h } from 'vue';

export const AlbumSharp = defineComponent({
  name: 'AlbumSharp',
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
        h('path', {"d": "M2 2h20v2H2zm0 18h20v2H2zM2 4h2v16H2zm18 0h2v16h-2zm-4 0h2v8h-2zm-4 0h2v8h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M14 3h2v7h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
