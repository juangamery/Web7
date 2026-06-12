import { defineComponent, h } from 'vue';

export const MoreVertical = defineComponent({
  name: 'MoreVertical',
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
        h('path', {"d": "M15 3v2h-2V3zm0 8v2h-2v-2zm0 8v2h-2v-2zM13 1v2h-2V1zm0 8v2h-2V9zm0 8v2h-2v-2zM11 3v2H9V3zm0 8v2H9v-2zm0 8v2H9v-2zm2-14v2h-2V5zm0 8v2h-2v-2zm0 8v2h-2v-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
