import { defineComponent, h } from 'vue';

export const SmartHomeSharp = defineComponent({
  name: 'SmartHomeSharp',
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
        h('path', {"d": "M2 20h20v2H2zm18-10h2v10h-2zM2 10h2v10H2zm2-2h2v2H4zm2-2h2v2H6zm2-2h2v2H8zm2-2h4v2h-4zm4 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm-9 8h6v2H9zm-2-2h2v2H7zm8 0h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
