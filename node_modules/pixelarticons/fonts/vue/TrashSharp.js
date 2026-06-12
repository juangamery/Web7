import { defineComponent, h } from 'vue';

export const TrashSharp = defineComponent({
  name: 'TrashSharp',
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
        h('path', {"d": "M18 20V8H6V20H18ZM9 6H15V4H9V6ZM20 22H4V8H2V6H7V2H17V6H22V8H20V22Z", "fillRule": "evenodd"})
      ]
    );
  }
});
