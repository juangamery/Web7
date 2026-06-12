import { defineComponent, h } from 'vue';

export const AudioWaveformSharp = defineComponent({
  name: 'AudioWaveformSharp',
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
        h('path', {"d": "M3 7h2v5H3zm4 0h2v13H7zm4-3h2v16h-2zm4 0h2v13h-2zM3 5h6v2H3zm4 15h6v2H7zm4-18h6v2h-6zm4 15h6v2h-6zm4-5h2v5h-2zm0-2h4v2h-4zM1 12h4v2H1z", "fillRule": "evenodd"})
      ]
    );
  }
});
