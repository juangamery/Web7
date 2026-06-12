import { defineComponent, h } from 'vue';

export const MoreVerticalSharp = defineComponent({
  name: 'MoreVerticalSharp',
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
        h('path', {"d": "M15 1v6h-2V1zm0 8v6h-2V9zm0 8v6h-2v-6zM13 1v2h-2V1zm0 8v2h-2V9zm0 8v2h-2v-2zM11 1v6H9V1zm0 8v6H9V9zm0 8v6H9v-6zm2-12v2h-2V5zm0 8v2h-2v-2zm0 8v2h-2v-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
