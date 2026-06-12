import { defineComponent, h } from 'vue';

export const LogoutSharp = defineComponent({
  name: 'LogoutSharp',
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
        h('path', {"d": "M8 11h12v2H8zm8-2h2v2h-2z", "fillRule": "evenodd"}),
        h('path', {"d": "M14 7h2v10h-2zm2 6h2v2h-2zM4 2h16v2H4zm0 18h16v2H4zM4 4h2v16H4zm14 0h2v3h-2zm0 13h2v3h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
