import { defineComponent, h } from 'vue';

export const SaveSharp = defineComponent({
  name: 'SaveSharp',
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
        h('path', {"d": "M16 20V14H8V20H16ZM12 10H6V6H12V10ZM20 6H18V4H20V6ZM20 20V6H22V22H2V2H18V4H4V20H6V12H18V20H20Z", "fillRule": "evenodd"})
      ]
    );
  }
});
