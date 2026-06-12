import { defineComponent, h } from 'vue';

export const SmartphoneSharp = defineComponent({
  name: 'SmartphoneSharp',
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
        h('path', {"d": "M6 2h12v2H6zm0 18h12v2H6zM4 2h2v20H4zm14 0h2v20h-2zm-7 15h2v2h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
