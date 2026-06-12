import { defineComponent, h } from 'vue';

export const VibrateSharp = defineComponent({
  name: 'VibrateSharp',
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
        h('path', {"d": "M6 3h12v2H6zm0 16h12v2H6zM6 5h2v14H6zm10 0h2v14h-2zm-5 11h2v2h-2zm13-9h-2v2h2zM0 7h2v2H0zm22 2h-2v2h2zM2 9h2v2H2zm22 2h-2v2h2zM0 11h2v2H0zm22 2h-2v2h2zM2 13h2v2H2zm22 2h-2v2h2zM0 15h2v2H0z", "fillRule": "evenodd"})
      ]
    );
  }
});
