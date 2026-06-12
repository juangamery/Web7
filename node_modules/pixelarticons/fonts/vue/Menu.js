import { defineComponent, h } from 'vue';

export const Menu = defineComponent({
  name: 'Menu',
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
        h('path', {"d": "M20 18H4v-2h16v2Zm0-5H4v-2h16v2Zm0-5H4V6h16v2Z", "fillRule": "evenodd"})
      ]
    );
  }
});
