import { defineComponent, h } from 'vue';

export const BellRingSharp = defineComponent({
  name: 'BellRingSharp',
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
        h('path', {"d": "M16 22H8V18H10V20H14V18H16V22ZM5 15H19V13H21V17H3V13H5V15ZM7 13H5V6H7V13ZM19 13H17V6H19V13ZM3 6H1V4H3V6ZM9 6H7V4H9V6ZM17 6H15V4H17V6ZM23 6H21V4H23V6ZM5 4H3V2H5V4ZM15 4H9V2H15V4ZM21 4H19V2H21V4Z", "fillRule": "evenodd"})
      ]
    );
  }
});
