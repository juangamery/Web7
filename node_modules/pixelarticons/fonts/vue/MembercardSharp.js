import { defineComponent, h } from 'vue';

export const MembercardSharp = defineComponent({
  name: 'MembercardSharp',
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
        h('path', {"d": "M22 19H15V23H13V21H11V23H9V19H2V5H22V19ZM4 17H20V7H4V17ZM14 15H6V13H14V15ZM18 11H6V9H18V11Z", "fillRule": "evenodd"})
      ]
    );
  }
});
