import { defineComponent, h } from 'vue';

export const TrophySharp = defineComponent({
  name: 'TrophySharp',
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
        h('path', {"d": "M18 5H22V13H18V17H13V19H15V21H9V19H11V17H6V13H2V5H6V3H18V5ZM8 15H16V5H8V15ZM4 11H6V7H4V11ZM18 11H20V7H18V11Z", "fillRule": "evenodd"})
      ]
    );
  }
});
