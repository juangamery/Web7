import { defineComponent, h } from 'vue';

export const ContactSharp = defineComponent({
  name: 'ContactSharp',
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
        h('path', {"d": "M0 2h24v2H0zm0 2h2v16H0zm22 0h2v16h-2zM0 20h24v2H0zM14 7h6v2h-6zm0 4h6v2h-6zm0 4h4v2h-4zM6 7h4v4H6zm0 6h4v2H6zm4 2h2v2h-2zm-6 0h2v2H4z", "fillRule": "evenodd"})
      ]
    );
  }
});
